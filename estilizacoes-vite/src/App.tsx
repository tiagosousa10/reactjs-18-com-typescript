import { ThemeProvider } from "styled-components"
import { Input } from "./components/Input"
import theme from "./theme/theme"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Input/>
    </ThemeProvider>
  )
}

export default App
