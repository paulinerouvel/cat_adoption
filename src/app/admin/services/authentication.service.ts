import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http: HttpClient) { }

isUserAuthenticated() {
  return new Observable<boolean>((observer) => {
    observer.next(true);
  })
}

isUserAuthenticatedRest() {
  return this.http.get('http://localhost:3000/users');
}
}
