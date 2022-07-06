import { ParedService } from './../../paredes/sub/sercices/pared.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface UserData {
  id: string;
  name: string;
  decor: string;
  desing: string;
  place:string;
  details:string;
}



@Component({
  selector: 'app-paredes-admin',
  templateUrl: './paredes-admin.component.html',
  styleUrls: ['./paredes-admin.component.css']
})
export class ParedesAdminComponent implements OnInit {


  tabLoadTimes: Date[] = [];
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }



  displayedColumns: string[] = ['name','decor','desing','place', 'details','actualizar','borrar'];
  dataSource:   any[] = [];
  name:         any ="";
  decor:        any ="";
  desing:       any ="";
  place:        any ="";
  details:      any ="";
  borrar:       any ="";
  actualizar:   any ="";

  constructor(private pared: ParedService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pared.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => {
          const newData={
            id:key,
            name:data[key].name,
            decor:data[key].decor,
            desing:data[key].desing,
            place:data[key].place,
            details:data[key].details
          }
          return newData });
      })
  }

  SaveData(){
    const data = {
      "name": this.name,
      "decor": this.decor,
      "desing": this.desing,
      "place": this.place,
      "details": this.details,
    };
    this.pared.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }

  deleteData(key:string){
    console.log(key);
    this.pared.deleteUser(key).subscribe(data =>{
     console.log(data);
    }, error =>{
       console.error(error);
    });
  }

  addUser(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogAdd1, {
      width: '300px',
      data: {
        name: this.name,
        decoracion: this.decor,
        desing: this.desing,
        lugar:this.place,
        detalles:this.details
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  editUser(row:any){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog1, {
      width: '700px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'example-dialog',
  templateUrl: 'example-dialog.html',
})
export class DialogOverviewExampleDialog1 {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog1>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private pared: ParedService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateUser():void{
    this.pared.updateUser(this.data).subscribe(
      (data: any) => {
        console.log(data);
      });
    this.dialogRef.close();
  }
}


@Component({
  selector: 'addUser',
  templateUrl: 'addUser.html',
})
export class DialogOverviewExampleDialogAdd1 {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog1>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private pared: ParedService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addUser():void{
    this.dialogRef.close();
  }
}
