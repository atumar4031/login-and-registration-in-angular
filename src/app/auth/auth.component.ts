import { Component, OnInit } from '@angular/core';
import { AuthRequest, AuthResponse, CustomPasswordValidator } from './auth-request';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private route: Router){}
  
    ngOnInit(): void {}


  loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email, Validators.minLength(10)]
    }),
    password: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(8)]
    }),

  })

  validateField(field: string): Boolean  | undefined{
    return (this.loginForm.get(field)?.hasError('required') && 
    (this.loginForm.get(field)?.dirty ||
     this.loginForm.get(field)?.touched));
  }

  login(){
    console.log("Login form", this.loginForm.value);
    console.log("Login form is invalid", this.loginForm.invalid);
    // this.authService.login(this.authRequest).subscribe({
    //   next: (res: AuthResponse) => {
    //     this.sessionService.accessToken = res.accessToken
    //     this.sessionService.refreshToken = res.refreshToken
    //     this.getCurrentUser()
    //     this.route.navigateByUrl('dashboard');
    //   },
    //   error: (err) => {
    //     console.log(err)
    //   }
    // });
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
