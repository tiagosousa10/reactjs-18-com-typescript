import { useSaveTodos } from "./hooks/useSaveTodos";


const App = () => {
  //Monitoring all changes on todos and save in localstorage
  useSaveTodos()
  
  return(
    <div>

    </div>
  )
}


export default App;
