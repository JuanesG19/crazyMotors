import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public formGroup!: FormGroup;
  userLogin: Login;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      email: ['', [Validators.required]],
      genre: ['', [Validators.required]],
    });
  }

  send() {
    const userForm = {
      id: this.formGroup.get('id')!.value,
      name: this.formGroup.get('name')!.value,
      number: this.formGroup.get('number')!.value,
      email: this.formGroup.get('email')!.value,
      genre: this.formGroup.get('genre')!.value,
    };

    const loginUser = {
      state: true,
      userInfo: userForm,
    };

    localStorage.setItem('login', JSON.stringify(loginUser));
    this.loginService.userState = true;
    this.loginService.userInfo = userForm;
  }
}
