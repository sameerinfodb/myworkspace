import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@myworkspace/core';

@Component({
  selector: 'myworkspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(@Inject('AuthService') private auth: AuthService) {}

  ngOnInit() {}

  private login() {
    this.auth.login('test', 'test');
  }
}
