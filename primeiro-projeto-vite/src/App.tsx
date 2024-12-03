import { useState } from "react"

const App = () => {
  const [count,setCount] = useState(0)

  const handleClick = () => {
   setCount(count + 1)
   setCount(c => c + 1)

  }

  return(
    <div>
      <h2> {count} </h2>
      <button onClick={handleClick}>
        adicionar +1  
        </button>
    
    </div>

  )  
}
export default App
