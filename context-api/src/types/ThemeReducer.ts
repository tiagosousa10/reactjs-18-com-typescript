//initial state
export type ThemeState = {
  theme: 'light' | 'dark' 
}

// actions
type ChangeTheme = {
  type: 'CHANGE_THEME',
  payload: ThemeState['theme']
}

//exportar todas as acoes
export type ThemeAction = ChangeTheme
