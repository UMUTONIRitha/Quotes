import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user-service/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:User;
userName="";
submitRepos(){
this.userService.userRequest(this.userName)
console.log(this.userName)
}
  constructor(private userService:UserService) { }

  ngOnInit(){
    this.userService.userRequest("UMUTONIRitha")
    this.user=this.userService.user
  }

}