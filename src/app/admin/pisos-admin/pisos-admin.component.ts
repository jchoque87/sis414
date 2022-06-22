import { Component, OnInit, Inject } from '@angular/core';
import { PisosService } from '../../services/pisos.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  id: string;
  name: string;
  job: string;
}

@Component({
  selector: 'app-pisos-admin',
  templateUrl: './pisos-admin.component.html',
  styleUrls: ['./pisos-admin.component.css']
})
export class PisosAdminComponent implements OnInit {

  displayedColumns: string[] = ['job', 'name', 'acciones'];
  dataSource: any[] = [];
  nombre:  any = "";
  trabajo: any = "";

  constructor(private pisos: PisosService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pisos.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => { 
          const newData = {
            id: key,
            job: data[key].job,
            name: data[key].name
          }
          return newData;
        });
      })
  }

  SaveData(){
    const data = {
      "name": this.nombre,
      "job": this.trabajo
    };    
    this.pisos.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }
  addUser(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogAdd, {
      width: '250px',
      data: {
        name: this.nombre,
        job: this.trabajo
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });    }
  editUser(row:any){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
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
    private pisos: PisosService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  updateUser():void{
    this.pisos.updateUser(this.data).subscribe(
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
    private pisos: PisosService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addUser():void{
    
    this.dialogRef.close();
  }
}