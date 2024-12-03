import { useState } from "react"

const App = () => {
  const [tasks,setTasks] = useState<string[]>([])
  const [inputValue,setInputValue] = useState('')
 
  const handleAdd = () => {
    if(inputValue == '') return;
    
    //metodo 1
    /* setTasks([...tasks, inputValue])
    setInputValue('') */

    //metodo 2
    //setTasks(tasks.concat([inputValue]))

    //metodo 3
    const newTasks = [...tasks]
    newTasks.push(inputValue)
    setTasks(newTasks)
    setInputValue('')
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
          <li key={key}> {task}  </li>
        ))}
      </ul>
     </div>
    
    </div>

  )  
}
export default App
