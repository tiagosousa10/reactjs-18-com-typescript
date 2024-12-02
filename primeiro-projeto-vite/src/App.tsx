import React from "react"
import UserAge ,{UserName ,UserEmail } from "./UserName"

const App = () => {
  return(
    <div>
      <h1>Meu componente de utilizador</h1>
      <UserName/>
      <UserEmail/>
      <UserAge/>
    </div>
  )
}
export default App
