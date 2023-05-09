import { Component, VERSION } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public name = 'Angular ' + VERSION.major;

  timer$: Observable<{ index: number; randomValue: number }>;

  constructor() {
    this.timer$ = timer(0, 1000).pipe(
      map((num: number) => {
        return {
          index: num,
          randomValue: Math.random()
        };
      })
    );
  }
}
