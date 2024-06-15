import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ReqInterceptor } from './interceptor/req.interceptor';
import {MatSnackBarModule } from '@angular/material/snack-bar'
import { ApplicationException } from './exception/application-exception.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
   { 
    provide: HTTP_INTERCEPTORS,
    useClass: ReqInterceptor,
    multi: true
  },
  { 
    provide: ErrorHandler,
    useClass: ApplicationException,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
