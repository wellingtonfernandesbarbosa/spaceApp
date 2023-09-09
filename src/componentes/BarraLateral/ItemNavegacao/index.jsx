import { styled } from "styled-components";

const ItemListaEstilizado = styled.li`
    display: flex;
    align-items: center;
    gap: 22px;
    margin-bottom: 30px;

    font-size: 24px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};

`;

const ItemNavegacao = ({
  children,
  IconeAtivo,
  IconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? IconeAtivo : IconeInativo} alt="ìcone do link"></img>
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
