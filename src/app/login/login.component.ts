import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService} from '../services/auth.service';
import {ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title="Expanse App";
  constructor(
    private router:Router,
    private userAuth:AuthService,
    private toastr:ToastrService
  ){};
  ngOnInit() {

  }
  public submitForm(data:any):void{
    
    this.userAuth.login(data).subscribe(data=>{
      if(data.json().message==false){
          this.toastr.error(data.json().message)
       }else if(data.json().success==false){
          this.toastr.error(data.json().message)
       }else{
          this.toastr.success('Login Successful');
          this.router.navigate(['dashboard']);
       }
   });
  
    
  }

}
