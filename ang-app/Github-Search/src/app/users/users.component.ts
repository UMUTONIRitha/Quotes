import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user-service/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[UserService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:User;
githubUserName="";
searchUser(){
this.userService.userRequest(this.githubUserName)
console.log(this.githubUserName)
}
  constructor(private userService:UserService) { }

  ngOnInit(){
    this.userService.userRequest("UMUTONIRitha")
    this.user=this.userService.user
  }

}