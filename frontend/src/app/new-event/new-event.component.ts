import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchService } from '../services/match.service';
import { Match } from '../model/Match';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event, EventType } from '../model/Event';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
      eventForm: FormGroup = new FormGroup({
      home: new FormControl('', [Validators.required]),
      draw: new FormControl('', [Validators.required]),
      away: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
     });
     id: number;
     match: Match;
  
     constructor(private eventService: EventService, private matchService: MatchService,
                private route: ActivatedRoute, private router: Router) {
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
      console.log(this.match);
     }
  
     get home() {
       return this.eventForm.get('home')
     }
     
     get draw() {
       return this.eventForm.get('draw')
     }
     
     get away() {
       return this.eventForm.get('away')
     }
     
     get type() {
       return this.eventForm.get('type')
     }
  
     submit() {
      console.log("fafafafa");
       this.eventService.create(new Event(this.home.value, this.draw.value, this.away.value, true, this.type.value, this.match))
         .subscribe(
           res => {res; this.router.navigate(['/match']); console.log(res);},
           err => console.log(err)
         )
     }
  
  }
