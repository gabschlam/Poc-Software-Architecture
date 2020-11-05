import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]

})
export class LoginComponent implements OnInit {

  public user : User;
 
  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
}

  ngOnInit(): void {
  }

  validateLogin() {
    if(this.user.username && this.user.password) {
        this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/home']);
        } else {
          alert('Usuario o password incorrecto');
        }
         
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('Ingresa usuario y password');
    }
  }

}
