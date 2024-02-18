import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../../core/models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(private auth: UserService, private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Z].*')]),
    });
  }
  get f() {
    return this.loginForm.controls
  }
  get username(){
    return this.loginForm.get('username')?.value;
  }
  get password(){
    return this.loginForm.get('password')?.value;
  }

}
