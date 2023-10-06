import { styled } from "styled-components";

const ContainerEstilizado = styled.div`
position: relative;
    display: inline-block;`

const InputEstilizado = styled.input`
    width: 566px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 16px;

    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;

    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    color: #D9D9D9;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = ({setFiltro}) => {
    return (
        <ContainerEstilizado>
            <InputEstilizado onChange={(evento) => { setFiltro(evento.target.value) }} type="text" placeholder="O que você procura?" />
            <IconeLupa src="./imagens/search.png" alt="Ícone de Lupa"/>
        </ContainerEstilizado>
    )
}

export default CampoTexto;