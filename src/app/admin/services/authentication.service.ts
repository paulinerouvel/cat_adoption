import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantesService } from '../../core/services/constantes/constantesservice';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http: HttpClient, private constantesService:ConstantesService) { }

isUserAuthenticated() {
  return new Observable<boolean>((observer) => {
    observer.next(true);
  })
}
isUserAuthenticatedRest() {
  //return this.http.get('http://localhost:3000/users');
  return this.http.get(this.constantesService.getAPIRoute('USERS'));
}
}