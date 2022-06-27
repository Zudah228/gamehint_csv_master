import { Csv } from "./domain/repositories/csv/Csv";

const csv = new Csv(`${__dirname}/../_import/game_hint.csv`);

console.log(csv.indices);

