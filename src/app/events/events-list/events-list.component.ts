import { Component, OnInit } from '@angular/core';

import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private _toastrService: ToastrService,
              private _route: ActivatedRoute) {

  }

  handleThumbnailClick(eventName) {
    this._toastrService.success(eventName);
  }

  ngOnInit() {
    this.events = this._route.snapshot.data['events'];
  }
}
