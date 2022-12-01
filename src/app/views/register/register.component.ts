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

  bike1: string;
  bike2: string;
  bike3: string;
  bike4: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.bike1 = '../../../assets/img/cinematicBikes/img1.jpg';
    this.bike2 = '../../../assets/img/cinematicBikes/img2.jpeg';
    this.bike3 = '../../../assets/img/cinematicBikes/img3.jpeg';
    this.bike4 = '../../../assets/img/cinematicBikes/img4.jpg';
  }

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

    this.loginService.register(loginUser);
  }
}
