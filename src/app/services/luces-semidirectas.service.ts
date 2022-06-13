import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LucesSemidirectasService {   

  /*configUrl = "https://registro-luces-semidirectas-default-rtdb.firebaseio.com";*/
  configUrl = "https://decoracionesinteriores-cb418-default-rtdb.firebaseio.com";
  
  constructor(private http: HttpClient) { }

  getUsers(){
    console.log(this.configUrl+"/users.json");
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