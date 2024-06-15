import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../session/session.service';


@Injectable({
  providedIn: 'root'
})
export class ProtectedGuard implements CanActivate{


  constructor(private sessionService: SessionService, private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state.url);
    if(!this.isLogging()){
      this.router.navigateByUrl("/login");
      return false;
    }

    return true;
  }

  isLogging(): Boolean{
    console.log(this.sessionService.accessToken)
    return this.sessionService.accessToken != null
  }
  
}
