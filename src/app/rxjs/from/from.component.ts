import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss',
})
export class FromComponent implements OnInit {
  fruits = ['Apple', 'Banana', 'Cherry'];

  constructor() {}

  ngOnInit(): void {}

  /**
   * method to call on save
   */
  save() {
    const fruits$ = from(this.fruits);
    console.log(from(fruits$));
    fruits$.subscribe((fruit) => console.log(fruit));
  }
}
