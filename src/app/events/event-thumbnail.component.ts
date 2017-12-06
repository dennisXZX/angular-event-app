import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { highlight: isEarlyStart, bold: isEarlyStart };
  }

  getTimeLabel() {
    // determine the message based on event time
    switch (this.event.time) {
      case '8:00 am':
        return '(Early Start)';
      case '10:00 am':
        return '(Late Start)';
      default:
        return '(Normal Start)';
    }
  }

  ngOnInit() {

  }

}
