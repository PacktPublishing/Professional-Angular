import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    public http: HttpClient
  ) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  login(username, password): void {
    const body = {
      "username": username,
      "password": password
    };

    this.http.post('http://localhost:4000/api/1.0/user/login', body)
      .subscribe((response: any) => {
        if (response.status === "success"){
          localStorage.setItem('token', response.data.token)
          return true;
        }
        else return false
      })
  }

  signup(name, username, email, password): void {
    const body = {
      "name": name,
      "username": username,
      "email": email,
      "password": password
    };

    this.http.post('http://localhost:4000/api/1.0/user/signup', body)
      .subscribe((response: any) => {
        if (response.status === "success"){
          localStorage.setItem('token', response.data.token)
          return true;
        }
        else return false;
      })
  }
}
