import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Gustavo Alves" />

      <Role>Offline - 77</Role>
      <UserRow nickname="Groovy" isBot />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
    </Container>
  );
};

export default UserList;
