import styled from "styled-components";
import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
`;

const Galeria = ({ texto, fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>{texto}</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem key={foto.id} foto={foto}></Imagem>
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares>

        </Populares>
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
