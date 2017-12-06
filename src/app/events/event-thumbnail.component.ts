import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event;
  timeLabel: string;

  ngOnInit() {
    // determine the message based on event time
    switch (this.event.time) {
      case '8:00 am':
        this.timeLabel = '(Early Start)';
        break;
      case '10:00 am':
        this.timeLabel = '(Late Start)';
        break;
      default:
        this.timeLabel = '(Normal Start)';
    }
  }
}
