import { Participant } from "../../entities/challonge/Participant/Participant";
import { AbstractChallongeRepository } from "./AbstractChallongeRepository";

class ParticipantRepository extends AbstractChallongeRepository {
  private static instance: ParticipantRepository;
  static getInstance() {
    if (!ParticipantRepository.instance) {
      ParticipantRepository.instance = new ParticipantRepository();
    }
    return ParticipantRepository.instance;
  }

  async create(
    tournamentId: string,
    parameters?: ParticipantCreateParam
  ): Promise<Participant> {
    const result = await this.fetch<Participant>(
      `tournaments/${tournamentId}/participant`,
      parameters,
      {
        method: "POST",
      }
    );

    return result;
  }
}

export const participantRepository = ParticipantRepository.getInstance();

// TODO: 中身の実装
export type ParticipantCreateParam = {};
