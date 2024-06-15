import { Component, OnInit } from '@angular/core';
import { AuthRequest, AuthResponse } from './auth-request';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { SessionService } from '../session/session.service';
import { Route, Router } from '@angular/router';
import { CurrentUser } from '../session/model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit{

  currentUser: CurrentUser =  {
    id: 0,
    roles: [],
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  authRequest: AuthRequest = {
    email: '',
    password: ''
  }

  authResponse: AuthResponse = {
    accessToken: '',
    refreshToken: ''
  }

  constructor(
    private authService: AuthService,
     private sessionService: SessionService,
     
      private route: Router){}
  ngOnInit(): void {}

  login(authForm: NgForm){
    this.authService.login(this.authRequest).subscribe({
      next: (res: AuthResponse) => {
        this.sessionService.accessToken = res.accessToken
        this.sessionService.refreshToken = res.refreshToken
        this.getCurrentUser()
        authForm.reset({
          email: '',
          password: ''
        })
        this.route.navigateByUrl('dashboard');
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  getCurrentUser(): void {
     this.authService.getCurrentUser().subscribe({
      next: (res: CurrentUser) => {
        console.log(res);
        this.sessionService.currentUser = res
      },
      error: (error: Error) => {
        console.log(error)
      }
    });
  }



}
