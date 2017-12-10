import { Match } from './Match';
import { Bet } from './Bet';

export enum EventType {
    WINNER, HT_WINNER, MGS_OVERT
}

export class Event {
    id: number;
    homeOdds: number;
    drawOdds: number;
    awayOdds: number;
    isActive: boolean;
    type: EventType;
    match: Match;
    bets: Array<Bet> = [];

    constructor(homeOdds?: number, drawOdds?: number, awayOdds?: number, isActive?: boolean, type?: EventType, match?: Match, bets?: Array<Bet>, id?: number) {
        this.homeOdds = homeOdds;
        this.drawOdds = drawOdds;
        this.awayOdds = awayOdds;
        this.isActive = isActive;
        this.match = match;
        this.type = type;
        this.bets = bets;
        this.id = id;
    }
}
