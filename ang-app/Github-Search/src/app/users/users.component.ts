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

}
  constructor() { }

  ngOnInit(): void {
  }

}