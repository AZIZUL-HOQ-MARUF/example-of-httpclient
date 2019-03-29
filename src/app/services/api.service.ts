import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  public apiUrl: string = 'https://reqres.in/api/';
  constructor(public http: HttpClient) { }
  public getUser() {
    return this.http.get(`${this.apiUrl}users/2`);
  }
}