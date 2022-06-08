import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MueblesDormitorioService {

  configUrl = "https://jsonplaceholder.typicode.com/users";
  configUrlPost = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<any>(this.configUrl);
  }
  addUser(data: any){

    return this.http.post<any>(this.configUrlPost,data);
  }
}
