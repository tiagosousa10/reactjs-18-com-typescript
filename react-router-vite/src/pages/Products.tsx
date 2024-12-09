import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [count,setCount] = useState(0)

  const handleOnClick = () => setCount(count +1)

  useEffect(() => {
    /* 
    //metodo 1 : excluit todos os querys strings
    // setSearchParams({count: String(count)})

    //metodo 2 : preserva todos os querys strings
    searchParams.set('count', String(count))
    setSearchParams(searchParams) 
    */

    //console.log(searchParams.has('parametro2'))
    
    searchParams.delete('parametro2')
    setSearchParams(searchParams)



  }, [count])

  return(
    <div>
      <strong>A pagina PRODUCTS!</strong>
      <button onClick={handleOnClick}>Adicionar mais um</button>
    </div>
  )
}
