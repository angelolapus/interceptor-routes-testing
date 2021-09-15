import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser():Observable<any>{
    return this.httpClient.get<any>('https://reqres.in/api/users?page=2')
    .pipe(
      map(response => {
        return response
      })
    )
  }

}
