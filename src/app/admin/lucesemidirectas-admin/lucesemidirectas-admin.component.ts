import { Component, OnInit, Inject} from '@angular/core';
import { LucesSemidirectasService } from 'src/app/services/luces-semidirectas.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  id: string;
  name: string;
  job: string;
  superficie: string;
  costo:string;
  envio:string;
}

@Component({
  selector: 'app-lucesemidirectas-admin',
  templateUrl: './lucesemidirectas-admin.component.html',
  styleUrls: ['./lucesemidirectas-admin.component.css']
})
export class LucesemidirectasAdminComponent implements OnInit {
  displayedColumns: string[] = ['job', 'name','superficie','costo','envio','Botones','Botones2'];
  dataSource: any[] = [];
  nombre:  any = "";
  trabajo: any = "";
  superficies: any =" ";
  Precio:any ="";
  tenvio:any="";
  Botones: any= "";
  Botones2: any= "";

  constructor(private lucesemidirectas:LucesSemidirectasService,
              public dialog: MatDialog) { }

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

  addUser(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogAdd, {
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
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '700px',
      height:'400px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private lucesemidirectas: LucesSemidirectasService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  updateUser():void{
    this.lucesemidirectas.updateUser(this.data).subscribe(
      (data: any) => {
        console.log(data);
      });
    this.dialogRef.close();
  }
}


@Component({
  selector: 'dialodAddUser',
  templateUrl: 'dialodAddUser.html',
})
export class DialogOverviewExampleDialogAdd {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private lucesemidirectas : LucesSemidirectasService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addUser():void{

    this.dialogRef.close();
  }
}







