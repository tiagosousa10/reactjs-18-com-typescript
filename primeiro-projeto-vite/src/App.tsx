import { useState } from "react"

const App = () => {
  const [tasks,setTasks] = useState<string[]>([])
  const [inputValue,setInputValue] = useState('')
 
  const handleAdd = () => {
    if(inputValue == '') return;
    //metodo 1
    setTasks([...tasks, inputValue])
    setInputValue('')
  }

  const handleDel = (key:number) => {
    setTasks(tasks.filter((_value,index) => index != key))
  }

  return(
    <div>
     <h1>Lista de Tarefas: </h1>

     <div>
      <input 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />
      <button onClick={handleAdd}>Adicionar</button>
     </div>

     <div>
      <ul>
        {tasks.map((task, key) => (
          <li key={key}> 
          {task}  
          - 
          <button onClick={() => handleDel(key)}>Excluir</button> </li>
        ))}
      </ul>
     </div>
    
    </div>

  )  
}
export default App
