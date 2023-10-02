import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const DialogEstilizado = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  border: 0px;
  padding: 0px;
  background-color: transparent;

  form{
    button{
      position: absolute;
      top: 24px;
      right: 24px;
      background-color: transparent;
      color: white;
      border: none;
      cursor: pointer;
    }
}`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {

  return (
    <>
      {foto && <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
            <form method="dialog">
              <BotaoIcone formMethod="dialog"><MdClear size={30}/></BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      }
    </>
  );
};

export default ModalZoom;
