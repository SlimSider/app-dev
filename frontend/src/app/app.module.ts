import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from './pages/register/register.component';
import  {appRoutes} from './routes';
import {MaterialItemsModule} from "./MaterialItemsModule";
import { MenuComponent } from './components/menu/menu.component';
import { MatchService} from "./services/match.service";
import { HelpComponent } from './pages/help/help.component';
import { ErrorComponent } from './pages/error/error.component';
import { MatchListComponent } from './match-list/match-list.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BalanceComponent } from './balance/balance.component';
import { NewBetComponent } from './new-bet/new-bet.component';
import { RouteGuard } from './route.guard';
import { EventService } from './services/event.service';
import { BetService } from './services/bet.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HelpComponent,
    ErrorComponent,
    MatchListComponent,
    NewMatchComponent,
    MatchDetailComponent,
    EventListComponent,
    NewEventComponent,
    BetListComponent,
    BalanceComponent,
    NewBetComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [AuthService, MatchService, RouteGuard, EventService, BetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
