import {useEffect} from 'react'

export const Card = () => {
  useEffect(() => {
    console.log('card foi renderizado')

    return () => console.log('card sumiu')
  },[])

  
  return(
    <div>
      CARD!!!
    </div>
  )
}
