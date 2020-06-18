import React from 'react';

import ServerButton from "../serverButton";

import { Container, Separetor } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separetor />

      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton mentions={1}/>
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;