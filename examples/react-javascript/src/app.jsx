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
