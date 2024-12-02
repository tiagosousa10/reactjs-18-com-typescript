import { ChangeEvent, useState } from "react"

const App = () => {
  const [value,setValue] = useState('')

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return(
    <div>
      {value == ''
       ? 
      <>  
      <input 
        type="text" 
        value={value}
        onChange={handleChange}
       />
      {value}
     </>
     :
     'voce já escreveu!'
     }
    
    </div>

  )  
}
export default App
