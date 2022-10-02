import { IGetRation, IGetRationElastic } from "../interfaces/IGetRation";

export interface IDbProvider{
    searchRations(query: string): Promise<IGetRation[]>
    searchRationsElastic(query: string): Promise<IGetRationElastic[]>

}