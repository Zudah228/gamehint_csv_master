import { AbstractChallongeRepository } from "./AbstractChallongeRepository";
import fetch from "node-fetch";
import { Tournament } from "../../entities/challonge/tournament/Tournament";

export class TournamentRepository extends AbstractChallongeRepository {
  async getAllTournaments(): Promise<Tournament[]> {
    try {
      const requestURL = this.generateUrl("tournaments");
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