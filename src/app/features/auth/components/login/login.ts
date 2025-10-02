// src/app/features/auth/components/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../../../../shared/components/auth-layout/auth-layout';
import { Button } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/Input.Component';
import {HeaderNavigationComponent} from '../../../../shared/components/header-navigation/header-navigation.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    AuthLayoutComponent,
    InputComponent,
    Button,
    HeaderNavigationComponent,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      // Aquí implementarías la lógica de autenticación
    }
  }
}