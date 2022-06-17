import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import{ Persona } from "src/app/models/persona";


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
  personaArray: Persona[] = [
    
  ];
  

  //Variable para ngModel 
  selectedPersona: Persona= new Persona(0,"","",0);

  addOrEdit(){
    if(this.selectedPersona.id === 0){
      this.selectedPersona.id=this.personaArray.length+1;
      this.personaArray.push(this.selectedPersona);
    }
    this.selectedPersona=new Persona(this.selectedPersona.id,this.selectedPersona.name,this.selectedPersona.country,this.selectedPersona.ci);
    this.selectedPersona.name="";
    this.selectedPersona.country="";
    this.selectedPersona.ci=0;

    
  }

  editar(persona: Persona){
    this.selectedPersona=persona;
  }

  delete(){
    if(confirm("Estas seguro de eliminar esto?"))
    {
      this.personaArray = this.personaArray.filter(x => x!= this.selectedPersona);
      this.selectedPersona.name="";
      this.selectedPersona.country="";
      this.selectedPersona.ci=0;
    }
    console.log(this.personaArray);
  }
}