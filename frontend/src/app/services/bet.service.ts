    import {Injectable} from '@angular/core';
    import {Http} from '@angular/http';
    import {Routes, Server} from '../utils/ServerRoutes';
    import {Observable} from 'rxjs/Observable';
    import 'rxjs/add/operator/map';
    import { Bet } from '../model/Bet';
    import { Event } from '../model/Event';
    
    @Injectable()
    export class BetService {
        event: Event;
        selected: number;

      constructor(private http: Http) {
      }
    
      getBets(): Observable<Bet[]> {
        return this.http.get(Server.routeTo(Routes.BET))
          .map(res => res.json());
      }
    
      create(e: Bet): Observable<Event> {
          console.log(e);
        return this.http.post(Server.routeTo(Routes.BET), e)
          .map(res => res.json());
      }
    
      delete(id: number) {
        return this.http.delete(Server.routeTo(Routes.BET) + '/' + id)
          .map(res => res.json());
      }
    
      read(id: number) {
        return this.http.get(Server.routeTo(Routes.BET) + '/' + id)
          .map(res => res.json());
      }
    
      update(e: Bet) {
        return this.http.put(Server.routeTo(Routes.BET) + '/' + e.id, e)
          .map(res => res.json());
      }
    
}
