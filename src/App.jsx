import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"

const FuncoGradiente = styled.div `
  background: var(--Gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FuncoGradiente>
      <EstilosGlobais />
    </FuncoGradiente>
  )
}

export default App
