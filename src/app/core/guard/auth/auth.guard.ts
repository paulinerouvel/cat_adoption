import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate (
    next:ActivatedRouteSnapshot,
    state : RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      return true;
  }
}
