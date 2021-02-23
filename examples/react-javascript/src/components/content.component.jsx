import React from "react";
import { usePublisherSubscriber } from "publisher-subscriber-provider";

export const ContentAutoUnsubscribe = () => {
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

export const Content = () => {
  const [text, setText] = React.useState("");

  const { subscribe } = usePublisherSubscriber();

  React.useEffect(() => {
    const unsubscribe = subscribe("onChangeText", setText);

    // Return cleanup function
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>Content</h3>
      <h5>The value has changed: {text}</h5>
    </div>
  );
};
