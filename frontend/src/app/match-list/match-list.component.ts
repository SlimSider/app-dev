import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MatchService } from '../services/match.service';
import { Match } from '../model/Match';
import { AuthService } from '../services/auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
    displayedColumns: String[] = ['home', 'away', 'isActive', 'ht_score', 'score', 'edit'];
    matches: DataSource<any> = new MatchDataSource(this.matchService);
    user: User = new User();

    constructor(private authService: AuthService, private matchService: MatchService) {
      this.user = authService.user;
    }
  
    delete(id: number) {
      this.matchService.delete(id)
        .subscribe(
          res => console.log(res),
          err => console.log(err)
        );
        
    }

    ngOnInit() {}
  }
  
  export class MatchDataSource extends DataSource<any> {
    constructor(private matchService: MatchService) {
      super();
    }

    connect(): Observable<Match[]> {
      return this.matchService.getMatches();
    }
  
    disconnect() {
    }
}
