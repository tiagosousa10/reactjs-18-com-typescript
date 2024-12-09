import {Routes,Route, Outlet, useRoutes} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { Products } from './pages/Products';
import { NotFoundPage } from './pages/NotFoundPage';
import { AuthMiddleware } from './middlewares/AuthMiddleware';
import { Login } from './pages/Login';

//metodo 1 - jsx
/* export const MainRoutes = () => {
  return(
    <Routes>
    <Route path='*' element={<NotFoundPage/>} />

    <Route 
      index
      element={<Home/>}
    />

    <Route 
      path='/about'
      element={<About/>}
    />

    <Route path='/products' element={<AuthMiddleware> <Outlet/> </AuthMiddleware>}>
      <Route
        index
        element={<Products/>}
      />
      <Route 
        path=':categoryId/:productId'
        Component={Product} // = element
      />
    </Route>  

    <Route path='/login' element={<Login/>} />     
  </Routes>
  )
}
 */


//metodo 2 : objetos Javascript

export const MainRoutes = () => {
  const element = useRoutes([
    {
        index:true,
        element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/products',
      element: <AuthMiddleware> <Outlet/> </AuthMiddleware>,
      children: [
        {
          index:true,
          element: <Products/>
        },
        {
          path: ':categoryId/:productId',
          element: <Product/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path:'*',
      element:<NotFoundPage/>
    }
])
  return element;
}
