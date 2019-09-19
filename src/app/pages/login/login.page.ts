import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  formLogin: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.createForm();
  }

  async login(){
    const credential = await this.auth.loginWhithEmail(this.formLogin.value);
    console.log(credential);
    //return this.router.navigate(['/tabs/dashboard']);
  }

  createForm(){
    this.formLogin = this.fb.group({
      email: [[''],[Validators.email]],
      password: [[''], [Validators.required]]
    });
  }
}
