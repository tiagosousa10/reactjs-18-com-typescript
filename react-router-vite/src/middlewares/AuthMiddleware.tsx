import { ReactNode } from "react"
import {Navigate} from 'react-router-dom'

type Props = {
  children: ReactNode
}


export const AuthMiddleware = ({children} : Props) => {
  const isAuthenticated = true
  
  if(isAuthenticated){
    return children
    
  } else {
    return <Navigate to={'/login'}  />
  }
}
