import { useState, useEffect } from "react"

export const Card = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [fullName,setFullName] = useState('')

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`)

    return () => console.log('useEffect já foi executado!')
    
  }, [firstName,lastName])

  return(
    <div>
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={e =>setLastName(e.target.value)} />

      <strong>Nome completo é: {fullName}</strong>
    </div>
  )
}
