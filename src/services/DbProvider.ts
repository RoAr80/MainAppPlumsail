import { serviceUrl } from "../config/config";
import { IGetRation } from "../interfaces/IGetRation";
import { IDbProvider } from "./IDbProvider";

export class DbProvider implements IDbProvider {
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
