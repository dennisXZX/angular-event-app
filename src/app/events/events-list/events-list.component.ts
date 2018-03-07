import { Component, OnInit } from '@angular/core';

import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private toastrService: ToastrService,
              private route: ActivatedRoute) {

  }

  handleThumbnailClick(eventName) {
    console.log('click');
    this.toastrService.success(eventName);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
