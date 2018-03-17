import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from "../index";

@Component({
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'voters';

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    // get the id parameter from URL and convert it into a number
    const id: number = parseInt(this.route.snapshot.params['id'], 10);

    this.event = this.eventService.getEvent(id);
  }

  // display the event session form
  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // get the next session id
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;

    // add the new session into the event object
    this.event.sessions.push(session);
    // update the event
    this.eventService.updateEvent(this.event);

    // close the event session form
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
