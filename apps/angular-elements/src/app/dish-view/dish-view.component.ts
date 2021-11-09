import { Component, OnInit } from '@angular/core';
import { DishShareService } from '../shared/dish-share.service';

@Component({
  selector: 'devon4ts-samples-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.scss']
})
export class DishViewComponent implements OnInit {
  dishname;
  dishdescription;

  constructor(public dishShareService: DishShareService) {}

  ngOnInit() {
    this.dishname = this.dishShareService.name;
    this.dishdescription = this.dishShareService.description;
  }
}
