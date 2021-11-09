import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DishShareService } from '../shared/dish-share.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'devon4ts-samples-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnInit {
  @Input() platename;

  @Input() platedescription;

  @Output()
  submitDishEvent = new EventEmitter();

  submitted = false;
  dish = { name: '', description: '' };

  constructor(public dishShareService: DishShareService) {}

  ngOnInit() {
    this.dish.name = this.platename;
    this.dish.description = this.platedescription;
  }

  onSubmit(dishForm: NgForm): void {
    console.log('SUBMIT');
    console.log(dishForm.value);
    this.dishShareService.createDish(
      dishForm.value.name,
      dishForm.value.description
    );
    this.submitDishEvent.emit('dishSubmited');
  }
}