import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpClient } from '@angular/common/http';
import {HttpModule} from "@angular/http";

import { MatchService } from './match.service';
import { Match } from '../model/Match';

describe('IssueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchService, {provide: HttpClient, deps: [MockBackend]},],
      imports: [
        HttpModule
      ],
    });
  });

  it('should be created', inject([MatchService], (service: MatchService) => {
    expect(service).toBeTruthy();
  }));

  it('should create the given match', inject([MatchService], (service: MatchService) => {
    service
      .getMatches()
      .subscribe(matches => {
        const match = new Match("home", "away", true, 1, 1, 0, 0, null, 10);

        service.create(match);

        expect(matches.length).toBe(1);
        expect(matches[0]).toBe(match);
      });
  }));

  it('should update the given match', inject([MatchService], (service: MatchService) => {
    service
      .getMatches()
      .subscribe(matches => {
        const match = new Match("home_updated", "away", true, 1, 1, 0, 0, null, 10);

        service.update(match);

        expect(matches[0]).toBe(match);
      });
  }));

  it('should delete the given match', inject([MatchService], (service: MatchService) => {
    service
      .getMatches()
      .subscribe(matches => {

        service.delete(10);

        expect(matches.length).toBe(0);
      });
  }));

});
