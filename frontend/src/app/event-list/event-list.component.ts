import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { EventService } from '../services/event.service';
import { Event } from '../model/Event';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { User } from '../model/User';
import { MatchService } from '../services/match.service';
import { Match } from '../model/Match';
import { MatTableModule } from '@angular/material';
import { Bet } from '../model/Bet';
import { BetService } from '../services/bet.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  displayedColumns: String[] = ['type', 'match' ,'home', 'draw', 'away', 'isActive', 'edit'];
  user: User = new User();
  match: Match;
  id: number;
  events: Event[] = [];
  amount: number;
  ready: boolean;
  selected: number;

  constructor(private authService: AuthService, private eventService: EventService,
              private matchService: MatchService, private route: ActivatedRoute,
              private router: Router, private betService: BetService ) {
    this.user = authService.user;
    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )
    this.eventService.getEvents().forEach(e=>e.forEach(ev=>{if(this.id==ev.match.id)this.events.push(ev)}));
  }

  delete(id: number) {
    this.eventService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  ngOnInit() {
    let m;
    this.matchService.read(this.id)
    .subscribe(
      match => this.match = match,
      err => console.log(err)
    )
  }

  onReady(event) {
    this.selected = event.value;   
    this.ready = true;
  }

  onBet() {
    this.router.navigate(['bet/new']);
  }

}