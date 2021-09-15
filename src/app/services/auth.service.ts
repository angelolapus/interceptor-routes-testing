import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticateSubject = new BehaviorSubject(false);
  authenticated = false;

  get isUserAuthenticated():Observable<boolean> {
    return this.authenticateSubject.asObservable();
  }

  constructor() { }

  getToken():string{
    return 'bearer testtoken11112333445566';
  }

  authenticateUser(){
    this.authenticated = !this.authenticated;
    this.authenticateSubject.next(this.authenticated);
  }

}
