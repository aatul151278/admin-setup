import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showMessages: any;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;

  rememberMe: boolean;

  constructor(private router:Router) { this.initForm() }

  ngOnInit(): void {
  }

  initForm() {
    this.user = {
      email: "",
      password: ""
    }
  }

  login() {
    console.log(this.user)
    this.router.navigate(['pages']);

  }
}
