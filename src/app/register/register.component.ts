import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { RegistrationRequest } from './reg';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { CustomPasswordValidator } from '../auth/auth-request';

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

  

  constructor(private registerService: RegisterService,private formBuilder: FormBuilder) { }
  registerForm = this.formBuilder.group(
    {
      firstname: this.formBuilder.control('', {
        validators: [Validators.required, Validators.minLength(3), Validators.pattern('[a-z][A-Z]')]
      }),
      lastname: this.formBuilder.control('', {
        validators: [Validators.required, Validators.minLength(3),]
      }),
      email: this.formBuilder.control('', {
        validators: [Validators.required,Validators.email, Validators.minLength(3),]
      }),
      password: this.formBuilder.control('', {
        validators: [Validators.required, Validators.minLength(8), CustomPasswordValidator()]
      }),
    }
  )

  register(): void {
    console.log("regis ", this.registerForm.value)
    // this.registerService.register(this.registerRequest).subscribe({
    //   next: () => {
    //     console.log("regis success")
    //   }, error: (error) => {
    //     console.log(error)
    //   }
    // })
  }

}
