import { ThemeAction } from "../types/ThemeReducer"
import { themeInitialState, themeReducer } from "./reducers/themeReducer"

// exportar todas as initial states
export const InitialState = {
 theme: themeInitialState
}

//exportar todos os reducers
export const Reducers = (state : InitialStateType, action : ActionType) => ({
  theme : themeReducer(state.theme, action)
})

//exportar todos os types
export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction

