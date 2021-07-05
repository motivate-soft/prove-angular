import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginWithProveApp = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['dashboard']);
  }

  changeLoginType(type) {
    if (type === 'app') { this.isLoginWithProveApp = true; } else { this.isLoginWithProveApp = false; }
  }

}
