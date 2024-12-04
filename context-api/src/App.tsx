import { Button } from "./components/Button";
import { ContextProvider } from "./contexts/context";

const App = () => {
  return(
    <ContextProvider>
     <Button/>
    </ContextProvider>
  )
}

export default App;
