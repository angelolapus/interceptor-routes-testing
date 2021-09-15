import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor-testing';

  constructor(private userService: UserService){
    this.getUser();
  }

  getUser(){
    this.userService.getUser().subscribe(response=> {
      console.log('users:', response);
    })
  }
}
