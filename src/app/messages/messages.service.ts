import {Injectable, signal} from "@angular/core";
import {Message, MessageSeverity} from "../models/message.model";


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  #messageSignal = signal<Message| null>(null);

  message = this.#messageSignal.asReadonly();

  showMessage(severity: MessageSeverity, text: string) {
    this.#messageSignal.set({severity, text});
  }

  clearMessage() {
    this.#messageSignal.set(null);
  }

}
