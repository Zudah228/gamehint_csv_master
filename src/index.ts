import { Csv } from "./domain/repositories/game_hint/Csv";
import path from "path";
import { GamehintParticipant } from "./domain/entities/gamehint/Participant";
import { tournamentRepository } from "./domain/repositories/challonge/TournamentRepository";

async function run() {
  const csv = new Csv<GamehintParticipant>(
    `${path.dirname("")}/_import/game_hint.csv`
  );

  console.log(csv.indices[0].申し込み日時);

  try {
    const result = await tournamentRepository.create({
      "tournament[type]": "double elimination",
      "tournament[name]": "api_test",
    });

    const tournament = await tournamentRepository.retrieve(
      result.id.toString()
    );

    console.log("トーナメントの作成に成功しました！");
    console.log(`トーナメントの名前：${tournament.name}`);
  } catch (e) {
    console.error(e);
  }
}

run();
