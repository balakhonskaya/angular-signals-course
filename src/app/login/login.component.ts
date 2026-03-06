import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MessagesService} from "../messages/messages.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'login',
    imports: [
        RouterLink,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    fb = inject(FormBuilder);

    authService = inject(AuthService);

    router = inject(Router);
  
    form = this.fb.group({
        email: [''],
        password: ['']
    });
    messagesService = inject(MessagesService);

    onLogin() {
        try {
            const {email, password} = this.form.value;
            if(!email || !password) {
                this.messagesService.showMessage("error", "Please fill in all fields");
                return;
            }
            this.authService.login(email, password);
            this.router.navigate(['/home']);

        }

        catch(err) {
            console.error(err);
            this.messagesService.showMessage("error", "Login failed");
        }
    }


}
