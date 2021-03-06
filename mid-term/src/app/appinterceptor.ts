import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {
  }
  intercept(
    
    req: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>> {
   const token =  JSON.parse(localStorage.getItem( 'token' )) ;
    if (token) {
        return next.handle(
            req.clone({
                setHeaders: {
                    Authorization: ` ${token.access_token}`,
                },
            })
        );
    } else {
        return next.handle(req);
    }
}

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //   const token = localStorage.getItem('token');
  //   if (token){
  //     const authReq = req.clone({
  //       headers: req.headers.append('Authorization', `Bearer ${token}`)
  //     });
  //     return next.handle(authReq);
  //   }

  //    return next.handle(req);
  //  }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const userToken = 'secure-user-token';
  //   const modifiedReq = req.clone({ 
  //     headers: req.headers.set('Authorization', `Bearer ${userToken}`),
  //   });
  //   return next.handle(modifiedReq);
  
}