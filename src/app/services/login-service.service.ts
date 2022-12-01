import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public userState: Boolean;
  public userInfo: User;

  constructor() {}
}
