import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { useTheme } from "./hooks/theme";

const App = () => {
  const {handleAuthenticateUser} = useAuth()
  const {handleInitTheme} = useTheme()


  useEffect(() => {
    // authenticate user using token saved in localstorage
    handleAuthenticateUser()

    // apply theme saved by user to localstorage
    handleInitTheme()
  }, [])

  return(
    <div>
      ...
    </div>
  )
}


export default App;
