import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { RegistrationRequest } from './reg';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  constructor(private registerService: RegisterService) { }

  register(registerForm: NgForm): void {
    this.registerService.register(this.registerRequest).subscribe({
      next: () => {
        registerForm.reset({
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        })
      }, error: (error) => {
        console.log(error)
      }
    })
  }

}
