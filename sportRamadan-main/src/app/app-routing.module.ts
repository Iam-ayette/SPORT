import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { StadiumsComponent } from './components/stadiums/stadiums.component';
import { AddStadiumsComponent } from './components/add-stadiums/add-stadiums.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchComponent } from './components/search/search.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { SearchStadiumsComponent } from './services/search-stadiums/search-stadiums.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  // http://localhost:4200 => Home component will be displayed
  { path: '', component: HomeComponent },
  // http://localhost:4200/signin => login component will be displayed
  { path: "signin", component: LoginComponent },
  // http://localhost:4200/subscription => signup component will be displayed
  { path: 'subscription', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },
  // http://localhost:4200/addMatch => add-match component will be displayed
  { path: 'addMatch', component: AddMatchComponent },
  // http://localhost:4200/addPlayer => add-player component will be displayed
  { path: 'addPlayer', component: AddPlayerComponent },
  // http://localhost:4200/addTeam => add-team component will be displayed
  { path: 'addTeam', component: AddTeamComponent },
  // http://localhost:4200/admin => admin component will be displayed
  { path: 'addStadiums', component: AddStadiumsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'stadiums', component: StadiumsComponent },
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  { path: 'playerInfo/:id', component: PlayerInfoComponent },
  { path: 'teamInfo/:id', component: TeamInfoComponent },
  { path: 'stadiumInfo/:id', component: StadiumInfoComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'editPlayer/:id', component: EditPlayerComponent },
  { path: 'editTeam/:id', component: EditTeamComponent },
  { path: 'editStadium/:id', component: EditTeamComponent },
  { path: 'searchMatches', component: SearchComponent },
  { path: 'searchStadium', component: SearchStadiumsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'weather', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
