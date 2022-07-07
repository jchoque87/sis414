import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LucesSemidirectasService {


  configUrl = "https://basepared-default-rtdb.firebaseio.com/ ";
  /*configUrl = "https://registro-luces-semidirectas-default-rtdb.firebaseio.com/";*/
  /*configUrl = "https://decoracionesinteriores-cb418-default-rtdb.firebaseio.com";*/

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
  updateUser(data:any){
    let url= `${this.configUrl}/user/${data.id}.json`;
    const requestData = {
      name: data.name,
      job: data.job,
      superficie:data.superficie,
      costo:data.costo,
      envio:data.envio
    }
    return this.http.put<any>(url, requestData);
  }
}
