import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
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
}
