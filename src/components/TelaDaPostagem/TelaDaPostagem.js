import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";
import { useState } from "react";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.postagem.titulo}</TitleHeader>
      <Image src={props.postagem.imagem} />
      <Description>{props.postagem.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
