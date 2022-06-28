import { Csv } from "./domain/repositories/game_hint/Csv";
import path from "path";
import { GamehintParticipant } from "./domain/entities/gamehint/Participant";
import { TournamentRepository } from "./domain/repositories/challonge/TournamentRepository";

async function run() {
  const csv = new Csv<GamehintParticipant>(
      `${path.dirname("")}/_import/game_hint.csv`);

  console.log(csv.indices[0].申し込み日時);

  const result = await new TournamentRepository().getAllTournaments();

  console.log(result[0]);
}

run();
