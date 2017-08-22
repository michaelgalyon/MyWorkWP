import { SPHttpClient } from '@microsoft/sp-http';

export interface IMyWorkWpProps {
  description: string;
  domElement: HTMLElement;
  requestsListName: string;
  spHttpClient: SPHttpClient;
  requestsSiteUrl: string;
}
