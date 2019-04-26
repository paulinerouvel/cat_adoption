import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/app/admin/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService:AuthenticationService) { 
    
  }
 
  canActivate (
    next:ActivatedRouteSnapshot,
    state : RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      return this.authenticationService.isUserAuthenticatedRest();
  }
}
