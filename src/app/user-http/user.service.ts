import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  userName: string;

  constructor(private http:HttpClient){
    this.user = new User("","","","","","","", "", new Date());
  }
  

    userRequest(){

      interface ApiResponse{
        login: string;
        name: string;
        bio: any;
        public_repos: number;
        followers: number;
        following: number;
        avatar_url: any;
        html_url: any;
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl + this.userName + "?access_token=" + environment.access_token).toPromise().then(response=>{

          this.user.avatar = response.avatar_url
          this.user.username = response.login
          this.user.name = response.name
          this.user.bio = response.bio
          this.user.repositories = response.public_repos
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.link = response.html_url
          

        resolve();

      },
      error=>{

          this.user.avatar = "https://avatars3.githubusercontent.com/u/32220225?s=400&v=4"
          this.user.username = "Duncan-Kiragu"
          this.user.name = "Duncan Kiragu"
          this.user.bio = "Developer"
          this.user.repositories = 22
          this.user.followers = 3
          this.user.following = 2
          this.user.link = "https://github.com/Duncan-Kiragu"

        reject(error);


        })
      })

      return promise

    }

    userLookup(userName: string){
      this.userName = userName;
    }
    

}
