import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CatAndFactService } from 'src/app/services/cat-and-fact.service';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router,
    public dialog: MatDialog) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  openDialog(): void {
    let dialogConfig=new MatDialogConfig();
    dialogConfig.width='300px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(DialogBoxComponent ,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


}
