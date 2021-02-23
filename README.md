# publisher-subscriber-provider

This package is an implementation of the publisher-subscriber pattern, using react hooks and context. It provides the necessary tools to publish events and subscribe to them. Control that no re-renders are performed on components that are not affected by published events.

## Features

- Publish-subscriber pattern.
- Persistence of subscriptions in context.
- Do not re-render on components not affected by the publication of an event.
- Ability to automatically unsubscribe via useSubscribe hook.
- Javascript & Typescript.

## Usage

You can check the examples folder.

### Add the provider

First, you need to add the Publisher Subscriber Provider by wrapping your components that need to publish / subscribe to events:

```javascript
import React from "react";
import { PublisherSubscriberProvider } from "publisher-subscriber-provider";
import { Content } from "./components/content.component";
import { Header } from "./components/header.component";
import { Other } from "./components/other.component";

export const App = () => {
  return (
    <PublisherSubscriberProvider>
      <Header />
      <Content />
      <Other />
    </PublisherSubscriberProvider>
  );
};
```

Now you can publish events from any child component:

```javascript
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
```

And subscribe/unsubscribe to those events from other components:

```javascript
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
```

You can auto-unsubscribe events using useSubscribe hook:

```javascript
export const ContentAutoUnsubscribe = () => {
  const [text, setText] = React.useState("");
  const { useSubscribe } = usePublisherSubscriber();

  useSubscribe("onChangeText", setText);

  return (
    <div>
      <h3>Content</h3>
      <h5>The value has changed: {text}</h5>
    </div>
  );
};
```

## Installing

Using npm:

```bash
$ npm install publisher-subscriber-provider
```

Using yarn:

```bash
$ yarn install publisher-subscriber-provider
```

## Peer dependencies

**publisher-subscriber-provider** needs the following peer dependencies:

```
"react": ">=16.8.6",
"react-dom": ">=16.8.6"
```

## Typescript

**publisher-subscriber-provider** includes TypeScript definitions.

## Example

You can check the examples folder.

## Credits

[Link to author github](https://github.com/v-borrego)
