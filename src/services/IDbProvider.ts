import { IGetRation } from "../interfaces/IGetRation";

export interface IDbProvider{
    searchRations(query: string): Promise<IGetRation[]>

}