import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  baseUrl = environment.baseUrl;


  constructor(private http: HttpClient, private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem('token')
  }

  register(credentials) {
    this.http.post<any>(`/api/account`, credentials).subscribe(res => {
      this.authenticate(res)

    })

  }

  login(credentials) {
    this.http.post<any>(`/api/account/login`, credentials).subscribe(res => {
      this.authenticate(res)

    })

  }

  authenticate(res) {
    localStorage.setItem('token', res);

    this.router.navigate(['/'])
  }

  logout() {
    localStorage.removeItem('token')
  }
}
