import { createContext, useContext } from "react";
import { createEmptyContextModel, ContextModel } from "./publisher-subscriber.model";

export const Context = createContext<ContextModel>(createEmptyContextModel());

export const usePublisherSubscriber = () => useContext<ContextModel>(Context);
