import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.html'
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2019',
    time: '10:00 am',
    price: 599,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
