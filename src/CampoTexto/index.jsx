import { styled } from "styled-components";

const InputEstilizado = styled.input`
    width: 502px;
    height: 26px;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    font-size: 20px;
    padding: 16px;
    color: #D9D9D9;
    &::placeholder {
        color: #D9D9D9;
    }
    background-color: transparent;
    background-image: url('./imagens/search.png');
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: right 10px top 10px;
`

const CampoTexto = () => {
    return (
        <InputEstilizado placeholder="O que você procura?" />
    )
}

export default CampoTexto;