import { Csv } from "./domain/repositories/game_hint/Csv";
import path from "path";
import { GamehintParticipant } from "./domain/entities/gamehint/Participant";
import {
  TournamentCreateParam,
  tournamentRepository,
} from "./domain/repositories/challonge/TournamentRepository";
import { getCommandLineArg } from "./utils/CommandLineArg";

async function run() {
  const csvFileName = getCommandLineArg("csvFileName");
  if (csvFileName === undefined) {
    console.error("コマンドライン引数が無効です。");
    return;
  }
  const csv = new Csv<GamehintParticipant>(
    `${path.dirname("")}/_import/${csvFileName}.csv`
  );

  console.log(csv.indices[0].申し込み日時);
  console.log(csvFileName);

  try {
    const createParam: TournamentCreateParam = {
      "tournament[type]": "double elimination",
      "tournament[name]": csvFileName,
    };
    console.log("トーナメントを作成します");
    console.log(
      `作成するトーナメントの名前：${createParam["tournament[name]"]}`
    );
    const result = await tournamentRepository.create(createParam);

    console.log("トーナメントの作成に成功しました！");

    console.log("再取得中...");
    console.log("");

    const tournament = await tournamentRepository.retrieve(
      result.id.toString()
    );

    console.log("再取得に成功しました！");
    console.log(`再取得したトーナメントの名前：${tournament.name}`);
  } catch (e) {
    console.error(e);
  }
}

run();
