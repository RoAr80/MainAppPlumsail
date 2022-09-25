export interface IGetRation {
    json: string;
    keywords: string;
    appVersionId: number;
    id: number;
    dateCreated: string;
  }

  type IGetRationProps = keyof IGetRation;

export const JSON: IGetRationProps = "json";
export const KEYWORDS: IGetRationProps = "keywords";
export const APP_VERSION_ID: IGetRationProps = "appVersionId";
export const ID: IGetRationProps = "id";
export const DATE_CREATED: IGetRationProps = "dateCreated";
