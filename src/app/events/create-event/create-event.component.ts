import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent {
  // flag to check if we should allow user to navigate away from this page
  isDirty: boolean;

  constructor(private router: Router,
              private eventService: EventService) {
    // prevent user from navigating away
    this.isDirty = true;
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);

    // allow user to navigate away from this page
    this.isDirty = false;

    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
