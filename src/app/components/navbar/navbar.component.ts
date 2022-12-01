import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: Login;
  _user: Login;
  userData$: Observable<Login>;
  stateLogin: Boolean;
  _stateLogin: Boolean;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.userData$ = this.loginService.data$();
    this.userData$.subscribe((users) => {
      this._user = users;
      this._stateLogin = users.state;
      this.login();
    });
    this.login();
  }

  login(): Boolean {
    if (localStorage.getItem('login')) {
      this.user = JSON.parse(localStorage.getItem('login'));
      this.stateLogin = this.user.state;
    } else {
      this.user = this._user;
      this.stateLogin = this._stateLogin;
    }
    return this.stateLogin;
  }

  logout() {
    localStorage.removeItem('login');
    /* this.loginService.userState = false;
    this.loginService.userInfo = null; */
    this.stateLogin = false;
    this.user = null;
  }
}
