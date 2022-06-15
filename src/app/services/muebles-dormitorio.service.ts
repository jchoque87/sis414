import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MueblesDormitorioService {

  configUrl = "https://muebles-dormitorio-default-rtdb.firebaseio.com";
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.configUrl+"/users.json");
  }
  addUser(data:any){
    return this.http.post<any>(this.configUrl+"/users.json",data);
  }

  deleteUser(key:any){
    let url= `${this.configUrl}/users/${key}.json`;
    return this.http.delete<any>(url).pipe(map(res =>{
      console.log(url);
      console.log(res);
        return res;
    }))
  }
}
