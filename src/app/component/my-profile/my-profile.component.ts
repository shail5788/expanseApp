import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user.model';
import {UsersService} from '../../services/users.service';
import {ToastrService} from '../../services/toastr.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user:User;
  userId:any;
  imageUrl:string="https://cdn3.vectorstock.com/i/1000x1000/92/77/faceless-businessman-avatar-man-in-suit-with-blue-vector-13569277.jpg";
  fileToUpload:File=null;
  constructor(private userService:UsersService,private toastr:ToastrService) { }

  ngOnInit() {
   this.getUserProfile();
  }
  public getUserProfile(){
      this.userId=JSON.parse(localStorage.getItem('currentUser')).user.userid;
      this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data.json().data[0];},
      err=>{console.log(err)});
  }
  public updateUserProfile(profile){
    // console.log(this.user);
    this.userService.updateUserProfile(this.user).subscribe(
      (response)=>{console.log(response.json())
        if(response.status){
          this.toastr.success("Profile Updated successfully !")
        }
      },
      (err)=>{console.log(err)}
    );
  }
 public handleFileInput(file:FileList){
   this.fileToUpload=file.item(0);
   var reader= new FileReader();
   reader.onload=(event:any)=>{
     this.imageUrl=event.target.result;
   }
   console.log(this.fileToUpload);
   reader.readAsDataURL(this.fileToUpload);
   this.userService.uploadImage(this.fileToUpload).subscribe(
     data=>{
       if(data.status){this.toastr.success("Image uploaded successfully")
       console.log(data)
       } 
     }
     ,err=>{console.log(err)})
 }
}
