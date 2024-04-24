import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cat } from 'src/app/model/cat';
import { CatAndFactService } from 'src/app/services/cat-and-fact.service';

@Component({
  selector: 'app-get-all-cats',
  templateUrl: './get-all-cats.component.html',
  styleUrls: ['./get-all-cats.component.css']
})
export class GetAllCatsComponent implements OnInit {
  cats: Cat[] = [];
  catSubscription: Subscription;
  constructor(private catService: CatAndFactService) { }

  ngOnInit(): void {
    this.catSubscription = this.catService.getCats().subscribe((data) => { this.cats = data; })
  }

ngOnDestroy(): void {
if(this.catSubscription) this.catSubscription.unsubscribe();
  
}
}
