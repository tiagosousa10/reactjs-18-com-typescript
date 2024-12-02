import React from "react"
import { UserInfo } from "./components/UserInfo"


const App = () => {
 

    return(
      <div>
        <h1>Meu primeiro componente</h1>
        
        <UserInfo 
          avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F275%2F847%2Foriginal%2Fmale-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg&f=1&nofb=1&ipt=9231833f9668bbe67d8feb137ee5bf7b82587abdb3ba8cf9195876be365c669e&ipo=images  " 
          name="Tiago"
          age={99} 
          email="teste@teste.com" 
          roles={[{id:1,title:'CEO'}]}
          />
        
        <UserInfo 
          avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F275%2F847%2Foriginal%2Fmale-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg&f=1&nofb=1&ipt=9231833f9668bbe67d8feb137ee5bf7b82587abdb3ba8cf9195876be365c669e&ipo=images  " 
          name="Pedro"
          age={23} 
          email="pedro@teste.com" 
          roles={[{id:1,title:'CTO'}]}
          />

      </div>
    )
 
  
}
export default App
