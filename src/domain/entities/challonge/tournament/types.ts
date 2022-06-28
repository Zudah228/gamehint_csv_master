const STATE = {
  all: "all",
  pending: "pending",
  inProgress: "in_progress",
  ended: "ended",
};

export type State = typeof STATE[keyof typeof STATE]


const TOURNAMENT_TYPE = {
  singleEl: "single elimination",
  doubleEl: "double elimination",
  roundRobin: "round robin",
  swiss: "swiss",
} as const;

export type TournamentType =
  typeof TOURNAMENT_TYPE[keyof typeof TOURNAMENT_TYPE]


const RANKED_BY = {
  matchWin: "match wins",
  gameWins: "game wins",
  pointsScored: "points scored",
  pointsDifference: "points difference",
  custom: "custom",
};

export type RankedBy = typeof RANKED_BY[keyof typeof RANKED_BY]
