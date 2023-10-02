import styled from "styled-components";
import Titulo from "../../Titulo";

import fotos from "./fotos-populares.json";

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const FotoPopular = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    padding: 12px 20px;
    font-size: 20px;
    cursor: pointer;
    width: 100%; 
    margin-top: 16px;
`

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => <FotoPopular key={foto.id} src={foto.path} alt={foto.alt}/>)}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  );
};

export default Populares;
