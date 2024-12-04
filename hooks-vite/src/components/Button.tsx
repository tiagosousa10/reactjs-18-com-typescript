import { useContext } from 'react'
import {ThemeContext} from '../App'

export const Button = () => {

  const {theme,setTheme} = useContext(ThemeContext)

  return(
    <div>
      <div>
      O meu contexto é : {theme}

      </div>
      {theme == 'light'
        ?
        <button onClick={() => setTheme('dark')}>Mudar Thema para DARK</button>
        :   
        <button onClick={() => setTheme('light')}>Mudar Thema para LIGHT</button>
        }
    </div>
  )
  
}
