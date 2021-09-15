import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isUserAuthenticated = false;
  constructor(private userService: UserService, private authService: AuthService){
    this.getUser();

    this.authService.isUserAuthenticated.subscribe((response:boolean) => {
      this.isUserAuthenticated = response;
    })
  }

  onAuthenticateUser(){
    this.authService.authenticateUser();
  }

  getUser(){
    this.userService.getUser().subscribe(response=> {
      console.log('users:', response);
    })
  }
}
