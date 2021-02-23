import React from "react";
import { usePublisherSubscriber } from "publisher-subscriber-provider";

export const Other = () => {
  const { useSubscribe } = usePublisherSubscriber();

  useSubscribe("onOtherEvent", () => console.log("other event"));

  return (
    <div>
      <div>This component subscribed to another event is not re-rendered.</div>
      <div>
        You can test using the react development tools and checking the "Highlight updates when components are rendered"
        check.
      </div>
    </div>
  );
};
