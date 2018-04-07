import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path :'', component : LandingPageComponent},
      {path :'landingpage', component : LandingPageComponent},
     {path:'GetStarted', component: ActivityComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
