import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';

import{User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user:User;
  constructor(private http:HttpClient) { 
    this.user=new User("","",0,0,0,"");
  }
  userRequest(githubUserName){
    var userName=githubUserName
    interface ApiResponse{
      avatar_url:string;
      name:string;
      public_repos:number;
      followers:number;
      following:number;
      html_url:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + githubUserName+"?access_token=ec315b05b4dec58f222abb17eafd0ba09ab23632").toPromise().then(response=>{
        this.user.avatar_url=response.avatar_url
        this.user.name=response.name
        this.user.public_repos=response.public_repos
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.html_url=response.html_url
        resolve()
      },
      error=>{
        this.user.avatar_url=""
        this.user.name=""
        this.user.public_repos=0
        this.user.followers=0
        this.user.following=0
        this.user.html_url=""
        reject(error)
      }
      )
    })
    return promise
  }
}

