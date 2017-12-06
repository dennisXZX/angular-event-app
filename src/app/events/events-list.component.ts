import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  providers: [EventService]
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private _eventService: EventService) {

  }

  ngOnInit() {
    this.events = this._eventService.getEvents();
  }
}
