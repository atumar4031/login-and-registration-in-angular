import { AbstractControl, ValidatorFn } from '@angular/forms';

export interface AuthRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
}


export function CustomPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.value;
    const upperPattern = /[A-Z]/;
    const lowerPattern = /[a-z]/;
    const specialPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const digitPattern = /\d/;

    return {
        hasUpperCaseError: !upperPattern.test(password),
        hasLowerCaseError: !lowerPattern.test(password),
        hasSpecialCharError: !specialPattern.test(password),
        hasDigitCharError: !digitPattern.test(password),
    }
  };
}
