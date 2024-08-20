import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss',
})
export class OfComponent {
  constructor() {}

  ngOnInit(): void {}

  /**
   * Method to demonstrate the of operator
   */
  emitFruits() {
    const fruits$ = of('Apple', 'Banana', 'Cherry');
    console.log(fruits$);

    fruits$.subscribe({
      next: (fruit) => console.log(fruit),
      complete: () => console.log('Completed'),
    });
  }
}
