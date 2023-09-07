import { styled } from "styled-components";

const ContainerEstilizado = styled.div``

const InputEstilizado = styled.input`
    width: 566px;
    height: 56px;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    box-sizing: border-box;
    padding: 16px 12px;
    background-color: transparent;
    font-size: 20px;
    font-family: 'Gandhi Sans Regular';
    
    &::placeholder {
        color: #D9D9D9;
    }
`

const IconeLupa = styled.img`
    position: absolute;
    top: 77px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = () => {
    return (
        <ContainerEstilizado>
            <InputEstilizado placeholder="O que você procura?" />
            <IconeLupa src="./imagens/search.png" alt="Ícone de Lupa"/>
        </ContainerEstilizado>
    )
}

export default CampoTexto;