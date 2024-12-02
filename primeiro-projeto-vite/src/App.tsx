import { FormEvent } from "react"


const App = () => {
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    alert('form enviado')
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Enviar</button>
      </form>
    </div>

  )
 
  
}
export default App
