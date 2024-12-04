import {useId} from 'react'

function App() {
  const inputId= useId()
  
  return (
    <div>
      <label htmlFor={inputId}>Insira algo no input</label>
      <input placeholder="Digite algo" id={inputId} />
       
    </div>
  )
}

export default App
