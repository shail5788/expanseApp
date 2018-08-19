import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService} from '../services/auth.service';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService:AuthService,private router:Router){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if(!this.AuthService.isLoggedIn()){
     this.router.navigate(['/login'])
    }
    return this.AuthService.isLoggedIn();
  }
}
