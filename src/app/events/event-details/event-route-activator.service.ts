import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { CreateEventComponent } from '../create-event/create-event.component';

@Injectable()
export class EventRouteActivator implements CanActivate, CanDeactivate<CreateEventComponent> {
  constructor(private _eventService: EventService,
              private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // retrieve the id from URL and convert it into a number
    const id = parseInt(route.params['id'], 10);

    // use !! to cast the result into a boolean value
    const eventExists = !!this._eventService.getEvent(id);

    // if there is no event matching the id, redirect user to a 404 page
    if (!eventExists) {
      this._router.navigate(['/404']);
    }

    return eventExists;
  }

  canDeactivate(component: CreateEventComponent) {
    if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    } else {
      return true;
    }
  }

}
