const App = () => {
  const handleGetPosts = async () => {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      })

      const result= await request.json()

      console.log('o resultado é :' , result)
  }

  return(
    <div>
      <button onClick={handleGetPosts}>Fazer Requisicao</button>
    </div>
  )
}

export default App;
