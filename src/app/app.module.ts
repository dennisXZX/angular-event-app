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
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index';
import { Error404Component } from './errors/404.component';

// services
import { ToastrService } from './common/toastr.service';
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
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
