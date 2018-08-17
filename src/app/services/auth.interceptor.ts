import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import {tap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService,private router:Router) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
         if(request.headers.get('noauth')){
              return next.handle(request.clone());
         }else{
             const cloneReq=request.clone({
                 headers:request.headers.set("Authorization","Bearer"+this.auth.getAccessToken())
             });
            return next.handle(cloneReq).pipe(
                tap(
                    event=>{},
                    err=>{if(err.error.auth==false){this.router.navigateByUrl('/login')}
                    }
                ) 
            ); 
         }
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${this.auth.getToken()}`
    //     }
    //   });
  
      return next.handle(request);
    }
  }