import { ChallongeRepository }
  from "./domain/repositories/challonge/ChallongeRepository.js";
import { Csv } from "./domain/repositories/game_hint/Csv.js";
import path from "path";
import { GamehintParticipant } from "./domain/entities/gamehint/Participant.js";

async function run() {
  const csv = new Csv<GamehintParticipant>(
      `${path.dirname("")}/_import/game_hint.csv`);

  console.log(csv.indices[0].申し込み日時);

  const result = await new ChallongeRepository().getAllTournaments();

  console.log(result[0]);
}

run();
