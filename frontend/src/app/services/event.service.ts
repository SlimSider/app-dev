import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Event } from '../model/Event';

@Injectable()
export class EventService {

  constructor(private http: Http) {
  }

  getEvents(): Observable<Event[]> {
    return this.http.get(Server.routeTo(Routes.EVENT))
      .map(res => res.json());
  }

  create(e: Event): Observable<Event> {
    return this.http.post(Server.routeTo(Routes.EVENT), e)
      .map(res => res.json());
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.EVENT) + '/' + id)
      .map(res => res.json());
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.EVENT) + '/' + id)
      .map(res => res.json());
  }

  update(e: Event) {
    return this.http.put(Server.routeTo(Routes.EVENT) + '/' + e.id, e)
      .map(res => res.json());
  }

}
