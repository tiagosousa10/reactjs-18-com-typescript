import {useState} from 'react'

const App = () => {
  const [logged, setLogged] = useState(false)

  const handleClick = () => {
    setLogged(!logged)
  }
 

  return(
    <div>
      {logged && (
         <div>
         Utilizador Logado (área privada!)
       </div>
      )}
     
      <button onClick={handleClick}>
        {logged ? ' Mostrar' : 'Ocultar'}
      </button>
    </div>

  )
 
  
}
export default App
