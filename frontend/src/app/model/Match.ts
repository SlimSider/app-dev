import { Event } from './Event';

export class Match {
    id: number;
    home: string;
    away: string;
    isActive: boolean;
    homeScore: number;
    awayScore: number;
    htHomeScore: number;
    htAwayScore: number;
    events: Array<Event>;

    constructor(home?: string, away?: string, isActive?: boolean, homeScore?: number, awayScore?: number, htHomeScore?: number, htAwayScore?: number, events?: Array<Event>, id?: number) {
        this.home = home;
        this.away = away;
        this.isActive = isActive;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.htHomeScore = htHomeScore;
        this.htAwayScore = htAwayScore;
        this.events = events;
        this.id = id;
    }
}
