import {Bet} from './Bet'

export enum Role {
  GUEST, USER, ADMIN
}

export class User {
  username: String;
  password: String;
  email: String;
  role: Role;
  balance: number;
  bet: Array<Bet> = [];

  constructor(username?: String, password?: String, email?: String, role?: Role, balance?: number, bets?: Array<Bet>) {
    this.username = username || "";
    this.password = password || "";
    this.email = email || "";
    this.role = role || Role.GUEST;
  }
}
