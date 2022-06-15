import { Component, OnInit } from '@angular/core';
import { MueblesDormitorioService } from 'src/app/services/muebles-dormitorio.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export class GridListDynamicExample {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}

@Component({
  selector: 'app-muebles-dormitorio-admin',
  templateUrl: './muebles-dormitorio-admin.component.html',
  styleUrls: ['./muebles-dormitorio-admin.component.css']
})
export class MueblesDormitorioAdminComponent implements OnInit {

  tabLoadTimes: Date[] = [];
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }

  displayedColumns: string [] = ['name','furniture','desing','place', 'details','actualizar','borrar'];
  dataSource:   any[] = [];
  name:         any = "";
  desing:       any = "";
  mate:        any = "";
  detalles:     any = "";
  mueble:       any = "";
  borrar:       any = "";
  actualizar:   any = "";

  constructor(private mueblesdormitorio: MueblesDormitorioService) { }

  ngOnInit(): void {
    this.mueblesdormitorio.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => {
          const newData={
            id:key,
            name:data[key].name,
            decor:data[key].decor,
            desing:data[key].desing,
            place:data[key].place,
            details:data[key].details,
            furniture:data[key].furniture
          }
          return newData });
      })
  }
  SaveData(){
    const data = {
      "name": this.name,
      "desing": this.desing,
      "place": this.mate,
      "details": this.detalles,
      "furniture": this.mueble,
    };
    this.mueblesdormitorio.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
    }
    deleteData(key:string){
      console.log(key);
    this.mueblesdormitorio.deleteUser(key).subscribe(data =>{
      console.log(data);
      }, error =>{
        console.error(error);
      });
    }
}
