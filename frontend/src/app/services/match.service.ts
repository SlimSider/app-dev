import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Match} from '../model/Match';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchService {

  constructor(private http: Http) {
  }

  getMatches(): Observable<Match[]> {
    return this.http.get(Server.routeTo(Routes.MATCHES))
      .map(res => res.json());
  }

  create(match: Match): Observable<Match> {
    return this.http.post(Server.routeTo(Routes.MATCHES), match)
      .map(res => res.json());
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.MATCHES) + '/' + id)
      .map(res => res.json());
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.MATCHES) + '/' + id)
      .map(res => res.json());
  }

  update(match: Match) {
    console.log(match);
    return this.http.put(Server.routeTo(Routes.MATCHES) + '/' + match.id, match)
      .map(res => res.json());
  }

}
