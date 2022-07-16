import {Action} from "@ngrx/store";

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  updatedAt = '[COUNT] updated at',
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear
}

export class CountUpdatedAtAction implements Action {
  constructor(public payload: {
    updatedAt: number
  }) {
  }
  readonly type = countActionsType.updatedAt
}

export type CountActions = CountIncreaseAction | CountDecreaseAction | CountClearAction | CountUpdatedAtAction
