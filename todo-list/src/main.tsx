import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoContextProvider } from './contexts/TodoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoContextProvider>
    <App />
    </TodoContextProvider>
  </StrictMode>,
)
