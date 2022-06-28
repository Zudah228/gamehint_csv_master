
import { CHALLONGE_API_KEY } from "../../../utils/Constants";

export class AbstractChallongeRepository {
  protected generateUrl(route: string):string {
    const url = `https://api.challonge.com/v1/${route}.json?api_key=${CHALLONGE_API_KEY}`;
    console.log(`request url: ${url}`);
    return url
  }
}
