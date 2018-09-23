import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl="https://api.github.com/users/";
  }

  getGitUser(userName:string){
    let url = this.baseUrl+userName;
    console.log("GITTTT SERVICE " + url);
    return this.http.get(url);
  }
}
