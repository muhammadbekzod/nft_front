import { StateType, ActionType } from 'typesafe-actions'
import { Epic } from 'redux-observable'

declare module 'BlocksTypes' {
  export type Store = StateType<typeof import('../src/store/index').default>
  export type RootAction = ActionType<typeof import('../src/store/actions').default>
  export type RootReducer = StateType<typeof import('../src/store/reducers').default>
  export type RootEpic = Epic<RootAction, RootAction, RootReducer, Services>
}

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('../src/store/actions').default>
  }
}
