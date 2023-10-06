import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"


const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        max-width: 212px;
    }
`

const Cabecalho = ({setFiltro}) => {
    return (
        <HeaderEstilizado>
            <img src="./imagens/logo.png" alt="Logo do SpaceApp" />
            <CampoTexto setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho