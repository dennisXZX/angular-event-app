import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute) {

  }

  ngOnInit() {
    // get the id parameter from URL and convert it into a number
    const id: number = parseInt(this._route.snapshot.params['id'], 10);

    this.event = this._eventService.getEvent(id);
  }

}
