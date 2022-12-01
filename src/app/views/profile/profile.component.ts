import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService
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
  }
}
