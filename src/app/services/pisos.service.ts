import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PisosService {

  configUrl = "https://decoracionesinteriores-cb418-default-rtdb.firebaseio.com/users.json";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.configUrl);
  }
  addUser(data:any){
    return this.http.post<any>(this.configUrl,data);
  } 

}
