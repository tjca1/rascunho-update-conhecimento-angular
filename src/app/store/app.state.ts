import { createAction, createReducer, on } from "@ngrx/store"

export interface IAappState{
    counter:number
}

export const appInitialState:IAappState = {
    counter:70
}

export const incrementaContador = createAction('[App] Aumenta contador')

export const decrementaContador = createAction('[App] Diminui contador')

export const appReducer = createReducer(
    appInitialState,
    on(incrementaContador, (state) => {
        state = {
           ...state,
           counter : state.counter + 1
        }

      return state
    }),
    on(decrementaContador, (state) => {
        state = {
           ...state,
           counter : state.counter - 1
        }

      return state
    })

)


