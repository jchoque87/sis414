import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachimbresService {

  configUrl = "https://machimbres-774b9-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

 getUsers(){
    console.log(this.configUrl+"/user.json");
    return this.http.get<any>(this.configUrl+"/user.json");

  } 
  addUser(data:any){
    return this.http.post<any>(this.configUrl+"/user.json",data);
  }
  deleteUser(key:any){
    let url= `${this.configUrl}/user/${key}.json`;
    return this.http.delete<any>(url).pipe(map(res =>{
      console.log(url);
      console.log(res);
         return res;
    }))
  }
}