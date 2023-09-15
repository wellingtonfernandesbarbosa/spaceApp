import { AiFillHeart } from "react-icons/ai";
import { CgExpand } from "react-icons/cg";
import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: #ffffff;
    box-sizing: border-box;
    padding: 16px;

    h3 {
      font-family: "GandhiSansBold";
    }

    h4 {
      flex-grow: 1;
    }

    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado }) => {
  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>Fonte: {foto.fonte}</h4>
          <BotaoIcone>
            <img src="./icones/favorito.png" alt="Ícone de favoritar" />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone aria-hidden={expandida}>
              <img src="./icones/expandir.png" alt="Ícone de favoritar" />
            </BotaoIcone>
          )}
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
