import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {CountState} from "./reducers/count/count";
import {map, Observable} from "rxjs";
import {selectCount, selectUpdatedAt} from "./reducers/count/count.selectors";
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from "./reducers/count/count.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount))
  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0))
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt))

  constructor(private store$: Store<CountState>) {
  }

  increase(){
    this.store$.dispatch(new CountIncreaseAction())
  }

  decrease(){
    this.store$.dispatch(new CountDecreaseAction())
  }

  clear(){
    this.store$.dispatch(new CountClearAction())
  }
}
