import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'myWorkWpStrings';
import MyWorkWp from './components/MyWorkWp';
import { IMyWorkWpProps } from './components/IMyWorkWpProps';
import { IMyWorkWpWebPartProps } from './IMyWorkWpWebPartProps';
import { GraphHttpClient, GraphClientResponse } from '@microsoft/sp-http';

export default class MyWorkWpWebPart extends BaseClientSideWebPart<IMyWorkWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyWorkWpProps> = React.createElement(
      MyWorkWp,
      {
        description: this.properties.description,
        requestsListName: this.properties.requestsListName,
        requestsSiteUrl: this.properties.requestsSiteUrl,
        domElement: this.domElement,
        spHttpClient: this.context.spHttpClient,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  public ComponentWillMount(): void {
    this.context.graphHttpClient.get("v1.0/groups?$select=displayName", GraphHttpClient.configurations.v1)
      .then((response: GraphClientResponse): Promise<any> => {
        return response.json();
      })
      .then((data: any): void => {
        MyWorkWp.
      });

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.RequestsGroupName,
              groupFields: [
                PropertyPaneTextField('requestsListName', {
                  label: strings.RequestsListFieldLabel,
                  value: "Request Center Library name"
                }),
                PropertyPaneTextField('requestsSiteUrl', {
                  label: strings.RequestsSiteUrlFieldLabel,
                  value: "Url goes here"
                }),
              ]
            },
          ]
        }
      ]
    };
  }
}
