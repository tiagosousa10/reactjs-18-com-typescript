import { ThemeAction } from "../types/ThemeReducer"
import { UserAction } from "../types/UserReducer"
import { themeInitialState, themeReducer } from "./reducers/themeReducer"
import { userInitialState, userReducer } from "./reducers/userReducer"

// exportar todas as initial states
export const InitialState = {
 theme: themeInitialState,
 user: userInitialState
}

//exportar todos os reducers
export const Reducers = (state : InitialStateType, action : ActionType) => ({
  theme : themeReducer(state.theme, action),
  user: userReducer(state.user,action)
})

//exportar todos os types
export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction | UserAction

