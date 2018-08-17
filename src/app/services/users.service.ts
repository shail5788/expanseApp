import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:Http) {}
  public getUsersList(){
    const LoggedUser=localStorage.getItem('currentUser');
    let headers=new Headers({'Content-Type':'application/json',"Authorization":JSON.parse(LoggedUser).token});
    let options=new RequestOptions({headers:headers});
   console.log(options);
   return this.http.get('http://localhost:1978/api/user-list',options)
    .map((response:Response)=>{
      // console.log(response)
      // if(response.json().success){
      //   // this.currentUser=<IUser>response.json().message;
      //   let userObj:any ={};
      //   userObj.user=response.json().message;
      //   userObj.token=response.json().token;
      //   localStorage.setItem("currentUser",JSON.stringify(userObj));

      // }
      response.json();
      
    }).catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
