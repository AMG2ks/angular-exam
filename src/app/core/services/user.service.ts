import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:3000/users"
  constructor(private _http: HttpClient) { }

  register(data: User) {
    return this._http.post(this.apiUrl, data)
  }
  login(data: User) {
    return this._http.post(this.apiUrl, data)
  }


}
