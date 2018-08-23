import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { UsersService }  from '../../services/users.service';   
import {ToastrService} from '../../services/toastr.service';
import {User} from "../../services/user.model"
import { Subject } from 'rxjs';
// import {User} from './user';                
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
  
})
export class UserListComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  closeResult: string;
  userList:any[] = [];
  currentUser:Object;
  //user:User[]=[];
  dtTrigger:Subject<any> = new Subject();
  constructor(private modalService: NgbModal, private modalService2: NgbModal,private UsersService:UsersService,private toastr:ToastrService) {} 

  open2(content) { 
  
    
    this.modalService.open(content,{size:'lg',windowClass:"popupClass" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  viewOpen(viewcontent){
    this.modalService.open(viewcontent,{windowClass:"popupClass" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open(content) {
    this.modalService2.open(content, { windowClass: 'dark-modal' });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
      //this.renderData();
      this.UsersService.getUsersList().subscribe((response:any)=>{
        response=response.json();
        this.userList=response.data;
        this.UsersService.usersArr=response.data as User[];
        this.dtTrigger.next();
         console.log(this.UsersService.usersArr)
      });
     
      
  }
 renderData(){
  this.UsersService.getUsersList().subscribe((response:any)=>{
      response=response.json();
      this.userList=response.data;
      this.UsersService.usersArr=response.data as User[];
       console.log(this.UsersService.usersArr)
    });
 }
  public registerUser(form){
    // this.user=form.value;
    this.UsersService.registerUser(form.value).subscribe(
      response=>{
        console.log(response.json())
        if(response.status){
          this.renderData();
          this.toastr.success("User Created Successfully!");
          form.reset();
        }
    },
    err=>{});
  }
  public getUserDetail(user,viewcontent){
    this.currentUser=user;
    console.log(this.currentUser);
    this.viewOpen(viewcontent)
  }   

}
