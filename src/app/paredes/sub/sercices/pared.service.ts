import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParedService {

  configUrl = "https://basepared-default-rtdb.firebaseio.com/";

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

  updateUser(data:any){
    let url= `${this.configUrl}/user/${data.id}.json`;
    const requestData = {
      name:data.name,
      decor:data.decor,
      desing:data.desing,
      place:data.place,
      details:data.details
    }
    return this.http.put<any>(url, requestData);
  }


}
