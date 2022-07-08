import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MueblesDormitorioService } from 'src/app/services/muebles-dormitorio.service';

export interface UserData {
  id: string;
  name: string;
  job: string;
  superficie: string;
  costo:string;
  envio:string;
}

@Component({
  selector: 'app-muebles-dormitorio-admin',
  templateUrl: './muebles-dormitorio-admin.component.html',
  styleUrls: ['./muebles-dormitorio-admin.component.css']
})
export class MueblesDormitorioAdminComponent implements OnInit {

  displayedColumns: string[] = ['job', 'name','superficie','costo','envio','Botones2' ,'Botones'];
  dataSource: any[] = [];
  nombre:  any = "";
  trabajo: any = "";
  superficies: any =" ";
  Precio:any ="";
  tenvio:any="";
  Botones: any= "";
  Botones2: any= "";

  constructor(private mueblesdormitorio: MueblesDormitorioService,
              public dialog: MatDialog) { }

              ngOnInit(): void {
                this.mueblesdormitorio.getUsers().subscribe(
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

            addUser(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogAdd2, {
      width: '300px',
      data: {
        name: this.nombre,
        job: this.trabajo,
        superficie:this.superficies,
        costo:this.Precio,
        envio:this.tenvio
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });    }

  editUser(row:any){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
      width: '700px',
      height:'300px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'actualizarmueblescuadrodedialogo',
  templateUrl: 'actualizarmueblescuadrodedialogo.html',
})
export class DialogOverviewExampleDialog2 {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private mueblesdormitorio: MueblesDormitorioService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  updateUser():void{
    this.mueblesdormitorio.updateUser(this.data).subscribe(
      (data: any) => {
        console.log(data);
      });
    this.dialogRef.close();
  }
}


@Component({
  selector: 'ProductosDialogo',
  templateUrl: 'ProductosDialogo.html',
})
export class DialogOverviewExampleDialogAdd2 {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private mueblesdormitorio : MueblesDormitorioService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addUser():void{
    this.dialogRef.close();
  }

  SaveData():void{
    this.mueblesdormitorio.addUser(this.data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }

}
