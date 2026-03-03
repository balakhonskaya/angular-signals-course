import { HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { LoadingService } from "../loading/loading.service";
import { finalize } from "rxjs";
import { inject } from "@angular/core";

export const loadingInterceptor: HttpInterceptorFn =
    (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
            const loadingService = inject(LoadingService);
            loadingService.loadingOn();
            return next(req)
                .pipe(
                    finalize(() => loadingService.loadingOff())
                );
        }
        