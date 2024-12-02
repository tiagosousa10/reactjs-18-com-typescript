import { Button } from "./components/Button"

const App = () => {

  const handleClick = (label:string) => alert(label)

  return(
    <div>
     <Button 
      onClick={handleClick}/>
    </div>
  )
 
  
}
export default App
