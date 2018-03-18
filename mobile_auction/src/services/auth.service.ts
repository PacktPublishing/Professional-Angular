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

  login(username, password) {
    const body = {
      "username": username,
      "password": password
    };

    return this.http.post('http://localhost:4000/api/1.0/user/login', body)
  }

  signup(name, username, email, password) {
    const body = {
      "name": name,
      "username": username,
      "email": email,
      "password": password
    };

    return this.http.post('http://localhost:4000/api/1.0/user/signup', body)
  }
}
