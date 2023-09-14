import { AiFillHeart } from "react-icons/ai";
import { CgExpand } from "react-icons/cg";
import styled from "styled-components";

const ImagemContainer = styled.figure`
  width: 448px;
  margin: 0;
`;

const Foto = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  height: 256px;
`;

const Titulo = styled.h3`
  margin: 0px;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const Fonte = styled.p`
  margin: 0px;
  font-size: 20px;
  padding-top: 8px;
  color: #FFFFFF;
`;

const Rodape = styled.footer`
  display: flex;
  background-color: #001634;
  margin-top: -6px;
  border-radius: 0 0 20px 20px;
  padding: 16px;
  align-items: flex-end;
`;

const Botao = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
`;

const RodapeDescricao = styled.div`
  flex-grow: 1;
`;

const RodapeIcones = styled.div`
  display: flex;
  gap: 24px;
  align-items: end;
`;

const Imagem = ({ foto }) => {
  return (
    <ImagemContainer>
      <Foto src={foto.path} alt={foto.titulo} />
      <figcaption>
        <Rodape>
          <RodapeDescricao>
            <Titulo>{foto.titulo}</Titulo>
            <Fonte>Fonte: {foto.fonte}</Fonte>
          </RodapeDescricao>
          <RodapeIcones>
            <Botao>
              <AiFillHeart color="#FFFFFF" size={24} />
            </Botao>
            <Botao>
              <CgExpand color="#FFFFFF" size={24} />
            </Botao>
          </RodapeIcones>
        </Rodape>
      </figcaption>
    </ImagemContainer>
  );
};

export default Imagem;
