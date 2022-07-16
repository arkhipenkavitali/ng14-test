import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {countActionsType, CountUpdatedAtAction} from "./reducers/count/count.actions";
import {map} from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }
  @Effect()
  updatedAt(){
    return this.actions$.pipe(
      ofType(countActionsType.decrease, countActionsType.increase, countActionsType.clear),
      map(() => {
        return new CountUpdatedAtAction({
          updatedAt: Date.now()
        })
      })
    )
  }
}
