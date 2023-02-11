import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {
  showMessages: any;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;

  constructor() { this.initForm() }

  ngOnInit(): void {
  }

  initForm() {
    this.user = {
      email: "",
    }
  }

  requestPass() {

  }
}
