import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cat } from 'src/app/model/cat';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {



  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    facts:new FormArray([new FormControl('')])
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cat,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    if (this.data) {
      this.myForm.patchValue(this.data); // Patch data from 'data' if provided
    }
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
}
