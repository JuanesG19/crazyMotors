import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { Observable, Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})


export class NavbarComponent implements OnInit {
  stateLogin: Boolean;

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.login();
  }


  login(): Boolean {
    if (localStorage.getItem('login')) {
      
      return (this.stateLogin = true);
    } else {
      return (this.stateLogin = false);
    }
  }

  logout() {
    localStorage.removeItem('login');
    this.loginService.userState = false;
    this.loginService.userInfo = null;
    this.stateLogin = false;
  }
}
