import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../channelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }

  },[messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Gustavo Alves"
            date="20/10/2000"
            content="This is a message"
          />
        ))}
        <ChannelMessage
          author="Gustavo Alves"
          date="20/10/2000"
          content="Testing"
        />
        <ChannelMessage
          author="Groovy"
          date="20/10/2000"
          content={
            <>
              <Mention>@Gustavo Alves</Mention> music add to queue.
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
