import axios from "axios"

const App = () => {

  const handleGetPosts =() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {console.log(response.data)})

  }

  return(
    <div>
      <button onClick={handleGetPosts}>Fazer Requisicao</button>
    </div>
  )
}


export default App
