import axios from "axios"



const App = () => {
  const handleGetPosts =async () => {
    const posts = await axios.post('https://jsonplaceholder.typicode.com/posts/', {
      title: 'Novo post',
      body: 'novoBody',
      userId:1
    },{})

    console.log(posts.data)
  }

  return(
    <div>
      <button onClick={handleGetPosts}>Fazer Requisicao</button>
    </div>
  )
}


export default App
