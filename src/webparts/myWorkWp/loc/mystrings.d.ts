declare interface IMyWorkWpStrings {
  PropertyPaneDescription: string;
  RequestsGroupName: string;
  DescriptionFieldLabel: string;
  RequestsListFieldLabel: string;
  RequestsSiteUrlFieldLabel: string;
  NewRequestURLFieldLabel: string;
}

declare module 'myWorkWpStrings' {
  const strings: IMyWorkWpStrings;
  export = strings;
}
