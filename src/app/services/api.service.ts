import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  public apiUrl: string = 'https://reqres.in/api/';
  public localUrl:string ='http://localhost:9090/hello-world-bean'
  constructor(public http: HttpClient) { }
  public getUser() {
    return this.http.get(`${this.apiUrl}users/2`);
  }
  public getLocalJsonData(){
    return this.http.get(`${this.localUrl}`);
  }


}