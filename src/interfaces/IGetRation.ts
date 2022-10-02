export interface IGetRation {
  json: string;
  keywords: string;
  appVersionId: number;
  id: number;
  dateCreated: string;
}

export interface IAppPostRationElastic {
  name: string;
  sex: string;
  selectedFitnessChoice: string;
  selectedMonthWithdrawal: number;
  selectedStartDate: Date;
  comments: string;
  preferencesState: string[];
  appVersionId: number;
}

export interface IGetRationElastic {
  id: string;
  source: IAppPostRationElastic;
}

type IGetRationProps = keyof IGetRation;

export const JSON: IGetRationProps = "json";
export const KEYWORDS: IGetRationProps = "keywords";
export const APP_VERSION_ID: IGetRationProps = "appVersionId";
export const ID: IGetRationProps = "id";
export const DATE_CREATED: IGetRationProps = "dateCreated";

type IGetRationElasticProps = keyof IGetRationElastic;
export const ID_ELASTIC: IGetRationElasticProps = "id";
export const SOURCE_ELASTIC: IGetRationElasticProps = "source";
