import { User } from './User';
import { Event } from './Event';

export class Bet {
    id: number;
    isActive: boolean;
    winner: boolean;
    stake: number;
    winnableStake: number;
    users: Array<User>;
    connectedEvent: Event;

    constructor(isActive?: boolean, winner?: boolean, stake?: number, winnableStake?: number, users?: Array<User>, connectedEvent?: Event, id?: number) {
        this.isActive = isActive;
        this.winner = winner;
        this.stake = stake;
        this.winnableStake = winnableStake;
        this.users = users;
        this.connectedEvent = connectedEvent;
        this.id = id;
    }
}
