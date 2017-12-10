import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchService } from '../services/match.service';
import { Match } from '../model/Match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {
    matchForm: FormGroup = new FormGroup({
    home: new FormControl('', [Validators.required]),
    away: new FormControl('', [Validators.required])
   });

   constructor(private matchService: MatchService, private router: Router) {
   }

   ngOnInit() {
   }

   get home() {
     return this.matchForm.get('home')
   }
   
   get away() {
     return this.matchForm.get('away')
   }

   submit() {
     this.matchService.create(new Match(this.home.value, this.away.value, true, -1, -1, -1, -1))
       .subscribe(
         res => {res; this.router.navigate(['/match'])},
         err => console.log(err)
       )
   }

}
