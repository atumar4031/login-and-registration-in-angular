import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationRequest } from './reg';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpCLient: HttpClient) { }

  register(register: RegistrationRequest){
    return this.httpCLient.post('http://localhost:8088/api/v1/auth/register', register);
  }

}
