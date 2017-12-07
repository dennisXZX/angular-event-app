import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(private _eventService: EventService) {

  }

  ngOnInit() {
    this.event = this._eventService.getEvent(1);
  }

}