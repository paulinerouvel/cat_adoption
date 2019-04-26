import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor() { }

isUserAuthenticated() {
  return new Observable<boolean>((observer) => {
    observer.next(true);
  })
}
}
