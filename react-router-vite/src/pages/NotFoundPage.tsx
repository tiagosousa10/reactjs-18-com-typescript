import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return(
    <div>
      <strong>Página não encontrada</strong> <br/>
      <Link to={'/'}>Voltar para HOME</Link>
    </div>
  )
}
