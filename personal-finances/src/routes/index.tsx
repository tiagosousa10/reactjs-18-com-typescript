import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages/Auth"
import { Layout } from "../components/Layout"

export const MainRoutes = () => {
  return(
    <Routes>
      <Route path="/signin"  element={<Auth type="signin"/>}/>
      <Route path="/signup"  element={<Auth type="signup"/>}/>
      <Route element={<Layout/>}>
        <Route 
          index
          element={<div><h1>Esta é a pagina inicial</h1></div>}
        />
      </Route>
    </Routes>
  )
}
