import { Component } from '@angular/core';
import { AuthService } from "../user/auth.service";
import { EventService, ISession } from "../events";

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(private authService: AuthService,
              private eventService: EventService) {

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions => {
      this.foundSessions = sessions;

      console.log(this.foundSessions);
      this.searchTerm = '';
      alert('search result is in the console.');
    }));
  }

}
