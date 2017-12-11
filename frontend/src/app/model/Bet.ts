import { User } from './User';
import { Event } from './Event';

export class Bet {
    id: number;
    active: boolean;
    winner: boolean;
    stake: number;
    winnableStake: number;
    user: User;
    connectedEvent: Event;

    constructor(active?: boolean, winner?: boolean, stake?: number, winnableStake?: number, user?: User, connectedEvent?: Event, id?: number) {
        this.active = active;
        this.winner = winner;
        this.stake = stake;
        this.winnableStake = winnableStake;
        this.user = user;
        this.connectedEvent = connectedEvent;
        this.id = id;
    }
}
