import React from "react"
import { UserInfo } from "./components/UserInfo"


const App = () => {
  const isLogged = true
  if(!isLogged){
    return;
  }

    return(
      <div>
        <h1>{isLogged ? 'Meu componente de utilizador' : 'Não está logado!'}</h1>
        {isLogged && <UserInfo/>}
      </div>
    )
 
  
}
export default App
