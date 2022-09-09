import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AoScoreComponent } from './components/ao-score/ao-score.component';
import { AkaScoreComponent } from './components/aka-score/aka-score.component';
import { CountDownComponent } from './components/count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AoScoreComponent,
    AkaScoreComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
