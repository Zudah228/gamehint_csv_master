import fetch from "node-fetch";
import { CHALLONGE_API_KEY } from "../../../utils/Constants.js";
import { Tournament } from "../../entities/challonge/tournament/Tournament.js";

export class ChallongeRepository {
  #generateUrl(route: string):string {
    return `https://api.challonge.com/v1/${route}.json?api_key=${CHALLONGE_API_KEY}`;
  }

  async getAllTournaments(): Promise<Tournament[]> {
    try {
      const requestURL = this.#generateUrl("tournaments");
      console.log(requestURL);
      const res = await fetch(requestURL, {
        method: "GET",
      });
      const json = await res.json() as Tournament[];
      return json;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
