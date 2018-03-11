import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from "../index";

@Component({
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    // get the id parameter from URL and convert it into a number
    const id: number = parseInt(this.route.snapshot.params['id'], 10);

    this.event = this.eventService.getEvent(id);
  }

}
