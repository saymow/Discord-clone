import React from "react";

import { Container, HashTagicon, Title, Separetor, Description } from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagicon />

      <Title>Chat-livre</Title>

      <Separetor />

      <Description> Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
