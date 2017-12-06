import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  providers: [
    EventService,
    ToastrService
  ]
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private _eventService: EventService,
              private _toastrService: ToastrService) {

  }

  handleThumbnailClick(eventName) {
    this._toastrService.success(eventName);
  }

  ngOnInit() {
    this.events = this._eventService.getEvents();
  }
}
