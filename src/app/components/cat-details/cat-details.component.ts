import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cat } from 'src/app/model/cat';
import { CatAndFactService } from 'src/app/services/cat-and-fact.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  cat: Cat;
  private id: number;
  catSubscription: Subscription;
  constructor(private route: ActivatedRoute, private catService: CatAndFactService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.catSubscription = this.catService.getCatById(this.id).subscribe((cat) => {
      this.cat = cat;
      console.log(this.cat);
    });
  }

  ngOnDestroy() {
    this.catSubscription.unsubscribe();
  }
}
