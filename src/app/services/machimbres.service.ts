import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachimbresService {

  configUrl = "https://machimbres-774b9-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.configUrl);
  }
  addUser(data:any){
    return this.http.post<any>(this.configUrl,data);
  } 

}