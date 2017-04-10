import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {InMemoryDataService} from './in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HeroSearchComponent} from './hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [AppComponent, DashboardComponent, HeroSearchComponent, HeroesComponent, HeroDetailComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
