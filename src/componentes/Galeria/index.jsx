import styled from "styled-components";
import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = ({ texto }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>{texto}</Titulo>
        </SecaoFluida>
        <Populares>
            
        </Populares>
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
