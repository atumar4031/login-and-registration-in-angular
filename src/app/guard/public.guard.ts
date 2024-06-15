import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if((state.url === '/login' || state.url === '/register') && this.isLogging()){
        this.router.navigateByUrl("/dashboard");
        return false;
      }
      
    return true;
  }


  isLogging(): Boolean{
    console.log(this.sessionService.accessToken)
    return this.sessionService.accessToken != null
  }
  
}
