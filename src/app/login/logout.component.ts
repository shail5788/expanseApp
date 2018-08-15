import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService} from '../services/auth.service';
import {ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
    export class LogoutComponent implements OnInit {
        constructor(private AuthService:AuthService,private ToastrService:ToastrService,private router:Router){}
        ngOnInit(){
            this.AuthService.logout();
            this.ToastrService.error('Logout Successful');
            this.router.navigate(['/login']);
        
        }
    }