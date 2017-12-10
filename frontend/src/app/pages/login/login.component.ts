import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  e: boolean;


  constructor(private loginService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.loginService.login(new User(this.username.value, this.password.value))
      .subscribe(
        res => {console.log(res); this.e = false; this.router.navigate(['/welcome'])},
        err => {console.log(err); this.e = true});
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    )
  }

  error() : boolean {
    return this.e;
  }

}
