import { Injectable } from '@angular/core';
import { CurrentUser } from './model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  
  get accessToken(){
    return localStorage.getItem("access_token") as string;
  }

  set accessToken(accessToken: string){
    localStorage.setItem("access_token", accessToken);
  }

  get refreshToken(){
    return localStorage.getItem("refresh_token") as string;
  }

  set refreshToken(refreshToken: string){
    localStorage.setItem("refresh_token", refreshToken);
  }

  set currentUser(currentUser: CurrentUser | null) {
    localStorage.setItem("current_user", JSON.stringify(currentUser));
  }

  get currentUser(): CurrentUser | null {
    const currentUserJson = localStorage.getItem("current_user");
    if (currentUserJson) {
      return JSON.parse(currentUserJson) as CurrentUser | null;
    } else {
      return null;
    }
  }

}
