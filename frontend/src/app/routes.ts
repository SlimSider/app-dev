import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {HelpComponent} from "./pages/help/help.component";
import {ErrorComponent} from "./pages/error/error.component";
import { MatchListComponent } from './match-list/match-list.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { RouteGuard } from './route.guard'
import { Role } from './model/User';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewBetComponent } from './new-bet/new-bet.component';
import { NewEventComponent } from './new-event/new-event.component';
import { BetListComponent } from './bet-list/bet-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children : [
  {path: '', redirectTo: 'help', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
  {path: 'register', component: RegisterComponent, data: {roles: [Role.GUEST]}},
  {path: 'match', component: MatchListComponent, pathMatch:'full'},
  {path: 'match/new', component: NewMatchComponent, pathMatch:'full'},
  {path: 'match/:id', component: MatchDetailComponent, pathMatch:'full'},
  {path: 'event/:id', component: EventListComponent, pathMatch:'full'},
  {path: 'event/:id/new', component: NewEventComponent, pathMatch:'full'},
  {path: 'bet', component: BetListComponent, pathMatch:'full'},
  {path: 'bet/new', component: NewBetComponent, pathMatch:'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'help', component: HelpComponent},
  {path: '**', component: ErrorComponent},
    ]
  }
];
