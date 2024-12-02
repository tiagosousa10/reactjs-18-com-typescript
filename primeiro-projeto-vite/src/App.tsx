import React from "react"
import { UserInfo } from "./components/UserInfo"


const App = () => {
 

    return(
      <div>
        <h1>Meu primeiro componente</h1>

        <UserInfo 
          avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fdiseno-avatar-persona_24877-38131.jpg&f=1&nofb=1&ipt=de12729c38643ef01f764ff50b7f685b644f0fa6723d06f238c3095036d45089&ipo=images"
          name="Tiago"
          age={99} 
          email="teste@teste.com" 
          roles={[{id:1,title:'CEO'}]}
          />
        
        <UserInfo 
          name="Pedro"
          age={23} 
          email="pedro@teste.com" 
          roles={[{id:1,title:'CTO'}]}
          />

      </div>
    )
 
  
}
export default App
