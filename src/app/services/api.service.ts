import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
<<<<<<< HEAD
  public apiUrl: string = 'https://reqres.in/api/';
  public localUrl:string ='http://localhost:9090/hello-world-bean'
=======
  public apiUrl: string = 'https://reqres.in/api/'; 
>>>>>>> d608d3c12d85bb5fd8126d197e2902459d66c1b2
  constructor(public http: HttpClient) { }
  public getUser() {
    return this.http.get(`${this.apiUrl}users/2`);
  }
<<<<<<< HEAD
  public getLocalJsonData(){
    return this.http.get(`${this.localUrl}`);
  }

=======
>>>>>>> d608d3c12d85bb5fd8126d197e2902459d66c1b2

}