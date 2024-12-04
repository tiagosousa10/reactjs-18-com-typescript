import {useRef} from 'react'

const App = () => {
  const inputElement = useRef<HTMLInputElement | null>(null)

 const handleClick = () => {
  const current = inputElement.current;

  if(!current){
    return
  }
  
  current.focus()


 }

  return (
    <div>
      <input ref={inputElement} />
      <button onClick={handleClick}>Focar no input</button>
       
    </div>
  )
}

export default App
