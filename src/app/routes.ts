import { Routes } from '@angular/router';

// components
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent, CreateSessionComponent
} from './events/index';
import { Error404Component } from './errors/404.component';

// services
import {
  EventRouteActivator,
  EventListResolver
} from './events/index';

/*
* resolver is some code which can be executed when a link has been clicked and before a component is loaded.
* before resolving the 'events' route, call the EventListResolver service,
* and when the resolver finishes, add the returned data to the route with a property named 'events'
* EventListResolver is responsible for fetching the events from API
* */
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteActivator] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
