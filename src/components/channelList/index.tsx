import React from "react"; 

import ChannelButton from "../channelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ServerName: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre"/>
      <ChannelButton channelName="main"/>
      <ChannelButton channelName="secondary"/>
    </Container>
  );
};

export default ServerName;
