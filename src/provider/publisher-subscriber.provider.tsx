import React from "react";
import { Context } from "./publisher-subscriber.context";

export const PublisherSubscriberProvider: React.FC = props => {
  const { children } = props;

  const subscribers = React.useRef({});

  const subscribe = (event, callback) => {
    subscribers.current = {
      ...subscribers.current,
      [event]: subscribers.current[event] ? [...subscribers.current[event], callback] : [callback],
    };

    return () => {
      subscribers.current = {
        ...subscribers.current,
        [event]: subscribers.current[event].filter(c => c !== callback),
      };
    };
  };

  const publish = (event, data?) => {
    subscribers.current[event]?.forEach(subscriberCallback => subscriberCallback(data));
  };

  const unsubscribeAll = () => (subscribers.current = {});

  const useSubscribe = (eventType: string, callback: (args: any) => void) =>
    React.useEffect(() => subscribe(eventType, callback), []);

  return (
    <Context.Provider
      value={{
        publish,
        subscribe,
        useSubscribe,
        unsubscribeAll,
      }}
    >
      {children}
    </Context.Provider>
  );
};
