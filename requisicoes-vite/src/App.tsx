import axios from "axios";

const App = () => {
  const api = axios.create({
    baseURL: 'https://placeholder.typicode.com'
  })  

  const api2 = axios.create({
    baseURL: 'https://placeholder.typicode.com'
  })  


  const handleGetPosts = async () => {
    const posts = await api2.get('posts')

    console.log(posts.data)
  }


  return(
    <div>
      <button onClick={handleGetPosts}>Fazer Requisicao</button>
    </div>
  )
}

export default App;
