import { Component, OnInit } from '@angular/core';
import { Match } from '../model/Match';
import { MatchService } from '../services/match.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { EventService } from '../services/event.service';
import { Event } from '../model/Event';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
    updateForm: FormGroup = new FormGroup({
    isActive: new FormControl('', [Validators.required]),
    home_score: new FormControl('', [Validators.required]),
    away_score: new FormControl('', [Validators.required]),
    ht_home_score: new FormControl('', [Validators.required]),
    ht_away_score: new FormControl('', [Validators.required])
   });
    match: Match = new Match();
    displayedColumns: String[] = ['home', 'away', 'isActive', 'edit'];
    id: number;
  
    constructor(private matchService: MatchService,
                private eventService: EventService,
                private route: ActivatedRoute,
                private router: Router) {
      this.route.params.subscribe(
        params => this.id = params.id,
        err => console.log(err)
      )
    }
  
    ngOnInit() {
      this.matchService.read(this.id)
        .subscribe(
          match => this.match = match,
          err => console.log(err)
        )
    }
  
    updateStatus() {
      this.match.isActive = this.isActive.value;
      this.match.homeScore = this.home_score.value;
      this.match.awayScore = this.away_score.value;
      this.match.isActive = !this.isActive.value;
      this.match.htHomeScore = this.ht_home_score.value;
      this.match.htAwayScore = this.ht_away_score.value;
      this.matchService.update(this.match)
        .subscribe(
          match => {console.log(match); this.router.navigate['/match']},
          err => console.log(err)
        )
    }
  
    submit() {
      
    }

    get home_score() {
      return this.updateForm.get('home_score')
    }

    get away_score() {
      return this.updateForm.get('away_score')
    }

    get isActive() {
      return this.updateForm.get('isActive')
    }

    get ht_home_score() {
      return this.updateForm.get('ht_home_score')
    }

    get ht_away_score() {
      return this.updateForm.get('ht_away_score')
    }
}
