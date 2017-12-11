import { Component, OnInit } from '@angular/core';
import { BetService } from '../services/bet.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bet } from '../model/Bet';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.component.html',
  styleUrls: ['./new-bet.component.css']
})
export class NewBetComponent implements OnInit {
  betForm: FormGroup = new FormGroup({
    stake: new FormControl('', [Validators.required]),
  });

  constructor(private betService: BetService, private userService: AuthService) { }

  ngOnInit() {
  }

  get stake() {
    return this.betForm.get('stake');
  }

  finish() {
    console.log(this.betService.event);
    console.log(this.userService.user);
    this.betService.create(new Bet(true, false, this.stake.value, this.stake.value*this.betService.selected, this.userService.user))
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
