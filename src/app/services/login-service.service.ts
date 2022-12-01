import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user$ = new Subject<Login>();

  constructor() {}

  register(loginUser: Login) {
    localStorage.setItem('login', JSON.stringify(loginUser));
    this.user$.next(loginUser);
  }

  data$(): Observable<Login> {
    return this.user$.asObservable();
  }
}
