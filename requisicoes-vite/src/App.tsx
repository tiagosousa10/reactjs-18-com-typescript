import axios, { AxiosError } from "axios";

const App = () => {
axios.defaults.baseURL= 'http://placeholder.typicode.com'

  const handleGetPosts = async () => {

    try{
      const posts = await axios.get('posts')
      console.log(posts.data)

    }catch(e){
      const error = e as AxiosError
      console.log('error: ',error.message)
    }

  }


  return(
    <div>
      <button onClick={handleGetPosts}>Fazer Requisicao</button>
    </div>
  )
}

export default App;
