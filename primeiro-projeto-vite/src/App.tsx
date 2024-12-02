import {MouseEvent} from 'react'
import { Button } from "./components/Button"

const App = () => {
  const handleClick = (e: MouseEvent) => {
    //interromper a propagacao
    e.stopPropagation()
    alert('cliquei no button')
  }
  return(
    <div onClick={() => alert('Clicou na div')} style={{border: '1px solid red', padding:30, background: 'red'}}>
      <button onClick={handleClick}>
        Texto button!
      </button>
    </div>
  )
 
  
}
export default App
