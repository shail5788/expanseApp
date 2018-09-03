import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../services/user.model';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectUser:User;
  
  usersArr:User[];
  constructor(private http:Http) {}
  public getUsersList(){
    const LoggedUser=localStorage.getItem('currentUser');
    let headers=new Headers({'Content-Type':'application/json',"Authorization":JSON.parse(LoggedUser).token});
    let options=new RequestOptions({headers:headers});
   
    return this.http.get('http://localhost:1978/api/user-list',options)
    .do((response:Response)=>{
     response.json().data;
     }).catch(this.handleError);
  }
  public registerUser(user:User){
      return this.http.post("http://localhost:1978/register",user).do(
        (response:Response)=>{
           response.json();
      }).catch(this.handleError);
  }
  public getUserById(user){
     const LoggedUser=localStorage.getItem('currentUser');
      let headers=new Headers({'Content-Type':'application/json',"Authorization":JSON.parse(LoggedUser).token});
      let options=new RequestOptions({headers:headers});
      return this.http.get(`http://localhost:1978/api/user/${user}`,options).do(
        (response:Response)=>{response.json();
      }).catch(this.handleError)
  }
  public updateUserInfo(user){
      const LoggedUser=localStorage.getItem('currentUser');
      let headers=new Headers({'Content-Type':'application/json',"Authorization":JSON.parse(LoggedUser).token});
      let options=new RequestOptions({headers:headers});
      return this.http.post("http://localhost:1978/api/user-update",JSON.stringify(user),options);
  }
  public updateUserProfile(user){
    const LoggedUser=localStorage.getItem('currentUser');
    let headers=new Headers({'Content-Type':'application/json',"Authorization":JSON.parse(LoggedUser).token});
    let options=new RequestOptions({headers:headers});
    return this.http.put(`http://localhost:1978/api/profile-update/${user._id}`,JSON.stringify(user),options);
  }
  public uploadImage(image:File){
    let token=JSON.parse(localStorage.getItem('currentUser')).token
    let headers=new Headers({"Authorization":token});
    let options=new RequestOptions({headers:headers});
    const formData= new FormData();
    formData.append('image',image,image.name);
    return this.http.post("//localhost:1978/api/upload-image",formData,options);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
