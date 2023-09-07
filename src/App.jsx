import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./Cabecalho"
import BarraLateral from "./BarraLateral"
import Banner from "./Banner"

const FuncoGradiente = styled.div `
  background: var(--Gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));
  width: 100%;
  min-height: 100vh;

  main {
    display: flex;
    gap: 24px;
  }
`

function App() {

  return (
    <FuncoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <main>
        <BarraLateral />
        <Banner />
      </main>
    </FuncoGradiente>
  )
}

export default App
