import React from "react";
import { usePublisherSubscriber } from "publisher-subscriber-provider";

export const Header = () => {
  const [value, setValue] = React.useState("");

  const { publish } = usePublisherSubscriber();

  React.useEffect(() => {
    publish("onChangeText", value);
  }, [value]);

  return (
    <div>
      <span>Header</span>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};
