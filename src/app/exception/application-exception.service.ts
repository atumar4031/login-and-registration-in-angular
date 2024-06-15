import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApplicationException implements ErrorHandler {

  constructor(private snackBar: MatSnackBar) { }

  handleError(error: any): void {
    this.snackBar.open(
      'Error is detected we are working on it.',
      'Close',
      {
        duration: 2000
      }
    );
    console.warn('Caught by global exception handler', error);
  }
}
