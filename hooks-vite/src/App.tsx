import {act, useReducer, useState} from 'react'

type TasksState = string[]
type TasksAction = {
  type:'add',
  payload:string
}


const reducer = (state:TasksState,action: TasksAction) :  TasksState => {
  if(action.type == 'add' && action.payload != ''){
   return  [...state, action.payload]
  }

  return state
}

const App = () => {
  const [tasks,dispatch] = useReducer(reducer, [])
  const [inputValue,setInputValue] = useState('')

  const handleClick = () => {
    dispatch({type:'add', payload:inputValue})
    setInputValue('')
  }


  return (
    <div>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
       />

      <button onClick={handleClick} >Nova Tarefa</button>

      <ul>
        {tasks.map((value,key) => (
          <li key={key}> {value} </li>
        ))}
      </ul>
    </div>
  )
}

export default App
