import { useEffect } from "react";
import { useAuth } from "./hooks/auth";

const App = () => {
  const {handleAuthenticateUser} = useAuth()

  useEffect(() => {
    // authenticate user using token saved in localstorage
    handleAuthenticateUser()
  }, [])

  return(
    <div>
      ...
    </div>
  )
}


export default App;
