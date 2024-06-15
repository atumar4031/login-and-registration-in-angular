import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest, AuthResponse } from './auth-request';
import { CurrentUser } from '../session/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(authRequest: AuthRequest){
    return this.http.post<AuthResponse>("http://localhost:8088/api/v1/auth/authenticate", authRequest);
  }

  getCurrentUser(){
    return this.http.get<CurrentUser>("http://localhost:8088/api/v1/user/current");
  }

}
