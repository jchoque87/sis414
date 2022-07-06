import { Component, OnInit } from '@angular/core';
import { LucesSemidirectasService } from '../services/luces-semidirectas.service';

@Component({
  selector: 'app-luces-semidirectas',
  templateUrl: './luces-semidirectas.component.html',
  styleUrls: ['./luces-semidirectas.component.css']
  
})
export class LucesSemidirectasComponent implements OnInit {
  displayedColumns: string[] = ['job', 'name','superficie','costo','envio','Botones','Botones2'];
  dataSource: any[] = [];
  nombre:  any = "";
  trabajo: any = "";
  superficies: any =" ";
  Precio:any ="";
  tenvio:any="";
  Botones: any= "";
  Botones2: any= "";

  constructor(private lucesemidirectas:LucesSemidirectasService) { }

  ngOnInit(): void {
    this.lucesemidirectas.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => { 
          const newData={
            id: key,
            job:data[key].job,
            name:data[key].name,
            superficie:data[key].superficie,
            costo:data[key].costo,
            envio:data[key].envio
          }
          return newData });
        
      })
  }

  SaveData(){
    const data = {
      "name": this.nombre,
      "job": this.trabajo,
      "superficie":this.superficies,
      "costo":this.Precio,
      "envio":this.tenvio
    };    
    this.lucesemidirectas.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }
 
  deleteData(key:string){
    
    console.log(key);
   this.lucesemidirectas.deleteUser(key).subscribe(data =>{
     console.log(data);
    }, error =>{
       console.error(error);
    });
    
  }
}

