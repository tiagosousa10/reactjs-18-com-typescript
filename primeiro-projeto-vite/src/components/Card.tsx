import { useState, useEffect } from "react"

export const Card = () => {
  

  useEffect(() => {
    const handleWindowClick = () => {
      console.log('cliquei na janela')
    }

    window.addEventListener('click',handleWindowClick)

    return () => window.removeEventListener('click', handleWindowClick)
  },[])

  return(
    <div>
      card está visivel
    </div>
  )
}
