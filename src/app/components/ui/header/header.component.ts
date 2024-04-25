import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CatAndFactService } from 'src/app/services/cat-and-fact.service';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { Cat } from 'src/app/model/cat';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router,
    public dialog: MatDialog,
    private catSevice:CatAndFactService) {}

  goToHome() {
    this.router.navigate(['/']);
  }

postCat(cat:Cat){
  return this.catSevice.postCat(cat).subscribe((data)=>{this.catSevice.setNewCat(data);});
}

  openDialog(): void {
    let dialogConfig=new MatDialogConfig();
    dialogConfig.width='400px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(DialogBoxComponent ,dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {this.postCat(data)

    
    });
  }


}
