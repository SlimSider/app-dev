import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { SettingsPageComponent } from './settings-page/settings-page.component';
//import { UserPageComponent } from './user-page/user-page.component';

const appRoutes: Routes = [
  // http://localhost:4200/*
  { path: 'home', component: HomePageComponent },
 // { path: 'settings', component: SettingsPageComponent },
 // { path: 'user/:index', component: UserPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
  //  SettingsPageComponent,
  //  UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
