import { Component, OnInit } from '@angular/core';

import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from "../index";

@Component({
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private toastrService: ToastrService,
              private route: ActivatedRoute) {

  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
