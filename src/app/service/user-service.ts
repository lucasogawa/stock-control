import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WebStorage } from './../util/web-storage';
import { Constants } from '../util/constants';

import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  URL = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getByUsernameAndPassword(
    username: string,
    password: string
  ): Observable<User[]> {
    const query: HttpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    const options = { params: query };

    return this.httpClient.get<User[]>(`${this.URL}`, options);
  }

  saveUserData(user: User): void {
    WebStorage.set(Constants.USER_KEY, user);
  }

  clearUserData(): void {
    WebStorage.set(Constants.USER_KEY, null);
  }

  isLogged(): boolean {
    return WebStorage.get(Constants.USER_KEY);
  }
}
