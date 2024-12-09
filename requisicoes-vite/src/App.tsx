const App = () => {
  const handleGetPosts = async () => {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body:JSON.stringify({title:'Novo posto!', body:'Muito top!', userId:1}),
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
