import {useRef, useState} from 'react'

const App = () => {
  const [time,setTime] = useState(0) // fazem re-renderizacao
  const intervalRef = useRef(0) // nao fazem re-renderizacao

  const handleStart = () => {
    if(intervalRef.current) handleStop()

    const intervalID = setInterval(() => {
      setTime(oldTime => oldTime + 1)
    },1000)

    intervalRef.current = intervalID
  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
  }


  return (
    <div>
      <h2> {time} </h2>
       <div style={{display:'flex', gap:20}}>
        <button onClick={handleStart}>Comecar</button>
        <button onClick={handleStop}>Parar</button>


       </div>
    </div>
  )
}

export default App
