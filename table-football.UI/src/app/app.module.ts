import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameComponent } from './components/game-list/game/game.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { UserProfileComponent } from './components/cabinet/user-profile/user-profile.component';
import { UserPanelComponent } from './components/cabinet/user-panel/user-panel.component';
import { SettingsComponent } from './components/cabinet/user-panel/settings/settings.component';
import { StatisticComponent } from './components/cabinet/user-panel/statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CabinetComponent,
    HeroComponent,
    GameListComponent,
    GameComponent,
    PreloaderComponent,
    UserProfileComponent,
    UserPanelComponent,
    SettingsComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
