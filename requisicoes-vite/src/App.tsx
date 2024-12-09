const App = () => {
  const handleGetPosts = async () => {
    const posts = fetch('https://jsonplaceholder.typicode.com/posts', {
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((_response) => {console.log('Tudo certo')})

    //const postsJson = await posts.json()

    const postsAwait = await posts

    console.log(postsAwait)
  }


  return(
    <div>
      <button onClick={handleGetPosts}>Fazer Requisicao</button>
    </div>
  )
}

export default App;
