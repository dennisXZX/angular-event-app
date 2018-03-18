// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventService,
  VoterService,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe
} from './events/index';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { Error404Component } from './errors/404.component';

// services
import { AuthService } from "./user/auth.service";

// routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    UpvoteComponent,
    Error404Component,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    VoterService,
    EventRouteActivator,
    EventListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
