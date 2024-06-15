import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedGuard } from './guard/auth.guard';
import { PublicGuard } from './guard/public.guard';

const routes: Routes = [
  {path: "login", component: AuthComponent, canActivate: [PublicGuard]},
  {path: "register", component: RegisterComponent, canActivate: [PublicGuard]},
  {path: "dashboard", component: DashboardComponent, canActivate: [ProtectedGuard]},
  {path: "", redirectTo: "login", pathMatch: "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
