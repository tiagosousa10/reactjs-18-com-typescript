import { useState } from "react"

const App = () => {
  const [tasks,setTasks] = useState<{label: string, done:boolean}[]>([])
  const [inputValue,setInputValue] = useState('')
 
  const handleAdd = () => {
    if(inputValue == '') return;
    //metodo 1
    setTasks([...tasks, {label: inputValue, done:false}])
    setInputValue('')
  }

  const handleDel = (key:number) => {
    setTasks(tasks.filter((_value,index) => index != key))
  }

  const handleToggleDone = (key:number) => {
    const newTasks = [...tasks]
    newTasks[key].done = !newTasks[key].done
    
    setTasks(newTasks)
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
          <input type="checkbox" checked={task.done} onChange={() => handleToggleDone(key)}/>
          {task.label}  
          - 
          <button onClick={() => handleDel(key)}>Excluir</button> </li>
        ))}
      </ul>
     </div>
    
    </div>

  )  
}
export default App
