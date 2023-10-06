import styled from "styled-components";
import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-evenly;
`;

const Galeria = ({
  texto,
  fotos = [],
  aoFotoSelecionada,
  aoAlternarFavorito,
  setTag
}) => {
  return (
    <>
      <Tags setTag={setTag}/>
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>{texto}</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                key={foto.id}
                foto={foto}
                aoAlternarFavorito={aoAlternarFavorito}
              ></Imagem>
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
