import React from "react";

export interface ContextModel {
  subscribe: (event: string, callback: (args: any) => void) => () => void;
  publish: (event: string, data?: any) => void;
  useSubscribe: (eventType: string, callback: (args: any) => void) => void;
}
export declare function usePublisherSubscriber(): ContextModel;

export declare const PublisherSubscriberProvider: React.FC;
