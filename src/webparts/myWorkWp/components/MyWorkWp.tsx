import * as React from 'react';
import styles from './MyWorkWp.module.scss';
import { IMyWorkWpProps } from './IMyWorkWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Timesheets from './Timesheets/Timesheets';
import Requisitions from './Requisitions/Requisitions';
import Expenses from './Expenses/Expenses';
import HRItems from './HRItems/HRItems';
import NewRequest from './NewRequest/NewRequest';
import MyRequests from './MyRequests/MyRequests';

import {
  Button,
  Grid,
  Column,
  Image,
  Label,
  Icon
} from 'semantic-react';

import { GraphHttpClient, GraphClientResponse } from '@microsoft/sp-http';




export default class MyWorkWp extends React.Component<IMyWorkWpProps, void> {
  public render(): React.ReactElement<IMyWorkWpProps> {
    return (
      <div className={styles.myWorkWp}>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <Grid stackable columns={2}>
          <Column className="Tasks" width={8}  >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
              <Label corner="left">8</Label>
            </Image>
          </Column>
          <Column className="Calendar" width={8} >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
              <Label corner="left">8</Label>
            </Image>
          </Column>
          <Column className="Timesheets" width={4} >
            <Timesheets domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Column>
          <Column className="Requisitions" width={4} >
            <Requisitions domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Column>
          <Column className="Expenses" width={4} >
            <Expenses domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Column>
          <Column className="HRItems" width={4} >
            <HRItems domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Column>
          <Column className="NewRequest" width={4} >
            <NewRequest domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Column>
          <Column className="MyRequests" width={4} >
            <MyRequests domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Column>
          <Column className="ReviewRequests" width={4} >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
            </Image>
          </Column>
          <Column className="RequestApprovals" width={4} >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
            </Image>
          </Column>
        </Grid>
      </div>
    );
  }

  private readItems(): void {

    this.context
    /* this.context.GraphHttpClient.get("v1.0/me?$select=office", GraphHttpClient.configurations.v1)
      .then((response: GraphClientResponse): Promise<any> => {
        return response.json();
      })
      .then((data: any): void => {
        // ...
      }); */
  }
}
