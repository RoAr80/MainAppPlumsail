import { serviceUrl } from "../config/config";
import { IGetRation, IGetRationElastic } from "../interfaces/IGetRation";
import { IDbProvider } from "./IDbProvider";

export class DbProvider implements IDbProvider {
  async searchRationsElastic(queryString: string): Promise<IGetRationElastic[]> {
    const query: string = serviceUrl + `api/ration/SearchRationsElastic?query=${queryString}`;
    const rationsGet: IGetRationElastic[] = await fetch(query)
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        return "";
      });

    return rationsGet;
  }
  async searchRations(queryString: string): Promise<IGetRation[]> {
    const query: string = serviceUrl + `api/ration/SearchRations?query=${queryString}`;
    const rationsGet: IGetRation[] = await fetch(query)
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        return "";
      });

    return rationsGet;
  }
}
