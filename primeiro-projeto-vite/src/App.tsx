import { ChangeEvent, useState } from "react"

const App = () => {
  const [fullName,setFullName] = useState({firstName: '', lastName: ''})

  const handleChangeFirstName = (e:ChangeEvent<HTMLInputElement>) => {
    setFullName({
      ...fullName,
      firstName: e.target.value
    })
  }

  const handleChangeLastName = (e:ChangeEvent<HTMLInputElement>) => {
    setFullName({
      ...fullName,
      lastName:e.target.value
    })
  }

  return(
    <div>
      <input type="text" value={fullName.firstName} onChange={handleChangeFirstName} />
      <input type="text" value={fullName.lastName} onChange={handleChangeLastName} />
    
    </div>

  )  
}
export default App
