import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken():string{
    return 'bearer testtoken11112333445566';
  }

}
