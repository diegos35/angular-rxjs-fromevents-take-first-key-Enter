import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {
  filter,
  distinctUntilChanged,
  take,
  first,
  takeWhile,
} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  ngOnInit() {
    const keyDowns$ = fromEvent(document, 'keydown').pipe(
      filter((e: KeyboardEvent) => e.keyCode === 13),
      first()
      //takeWhile(conditicon)
      //take(2)
    );

    const observer = {
      next: (escpress) => {
        if (escpress.type === 'keydown') {
          // Do your thing
          console.log('escape key only');
        }
      },
    };

    keyDowns$.subscribe(observer);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
