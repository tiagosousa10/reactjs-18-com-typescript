import axios from "axios"

const App = () => {
  const controller = new AbortController()

  const handleOnClick = async () => {
    await axios('https://jsonplaceholder.typicode.com/posts', {signal: controller.signal}) 
  }

  const handleOnClickStop = () => {
    controller.abort()
  }


  return(
    <div>
      <button onClick={handleOnClick}>Fazer Requisicao</button>
      <button onClick={handleOnClickStop}>Parar Requisicao</button>
    </div>
  )
}

export default App;
