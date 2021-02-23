import React from "react";
import { Content } from "./components/content.component";
import { Header } from "./components/header.component";
import { PublisherSubscriberProvider } from "publisher-subscriber-provider";
import { Other } from "./components/other.component";

export const App: React.FC = () => {
  const [state, setState] = React.useState("");
  return (
    <>
      <PublisherSubscriberProvider>
        <Header />
        <Content />
        <Other />
      </PublisherSubscriberProvider>
    </>
  );
};
