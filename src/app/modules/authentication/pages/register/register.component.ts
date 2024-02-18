import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../../core/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup
  constructor(private auth: UserService, private router: Router,
              private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
        first_name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]),
        last_name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      },
    );
  }
  get f() {
    return this.registerForm.controls
  }
  get first_name(){
    return this.registerForm.get('first_name')?.value;
  }

  get last_name() {
    return this.registerForm.get('last_name')?.value;
  }

  get email(){
    return this.registerForm.get('email')?.value;
  }

  get password(){
    return this.registerForm.get('password')?.value;
  }

  registerUser() {
    let user: User = {
      firstName: this.first_name,
      lastName: this.last_name,
      email: this.email,
      password: this.password
    };
    this.auth.register(user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }

}
