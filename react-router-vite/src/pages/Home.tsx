import { Link } from "react-router-dom"

export const Home = () => {
  return(
    <div>
      <strong>HOME!</strong>
      <div>
        Ir para a pagina de Sobre <br/>
        <Link to={'/about'}>Pagina de Sobre</Link>
      </div>
    </div>
  )
}
