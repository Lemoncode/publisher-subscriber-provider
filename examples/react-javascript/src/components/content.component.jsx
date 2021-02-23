import React from "react";
import { usePublisherSubscriber } from "publisher-subscriber-provider";

export const Content = () => {
  const [text, setText] = React.useState("");

  const { useSubscribe } = usePublisherSubscriber();

  useSubscribe("onChangeText", val => setText(val));

  return (
    <div>
      <h3>Content</h3>
      <h5>The value has changed: {text}</h5>
    </div>
  );
};
