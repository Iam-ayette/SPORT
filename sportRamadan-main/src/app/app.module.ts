import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTabComponent } from './components/matches-tab/matches-tab.component';
import { PlayersTabComponent } from './components/players-tab/players-tab.component';
import { TeamsTabComponent } from './components/teams-tab/teams-tab.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { StadiumsComponent } from './components/stadiums/stadiums.component';
import { AddStadiumsComponent } from './components/add-stadiums/add-stadiums.component';
import { StadiumsTabComponent } from './components/stadiums-tab/stadiums-tab.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchComponent } from './components/search/search.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { HttpClientModule } from "@angular/common/http";
import { StadiumsPipe } from './services/stadiums.pipe';
import { SearchStadiumsComponent } from './services/search-stadiums/search-stadiums.component';
import { UsersTabComponent } from './users-tab/users-tab.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesTabComponent,
    PlayersTabComponent,
    TeamsTabComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    NewsInfoComponent,
    ArticleComponent,
    MatchInfoComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    StadiumsComponent,
    AddStadiumsComponent,
    StadiumsTabComponent,
    EditMatchComponent,
    EditPlayerComponent,
    EditTeamComponent,
    ReversePipe,
    AsterixPipe,
    SearchComponent,
    StadiumInfoComponent,
    EditStadiumComponent,
    StadiumsPipe,
    SearchStadiumsComponent,
    UsersTabComponent,
    UserInfoComponent,
    EditUserComponent,
    UsersComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
