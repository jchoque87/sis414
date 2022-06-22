import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PisosService {

  configUrl = "https://decoracionesinteriores-cb418-default-rtdb.firebaseio.com"; 

  constructor(private http: HttpClient) { }

  getUsers(){
    let url= `${this.configUrl}/users.json`;
    return this.http.get<any>(url);
  }
  addUser(data:any){
    let url= `${this.configUrl}/users.json`;
    return this.http.post<any>(url,data);
  }
  updateUser(data:any){
    let url= `${this.configUrl}/users/${data.id}.json`;
    const requestData = {
      name: data.name,
      job: data.job
    }
    return this.http.put<any>(url, requestData);
  } 

}
