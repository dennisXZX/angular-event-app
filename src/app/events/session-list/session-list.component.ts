import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../";

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];

  ngOnChanges() {
    if (this.sessions) {
      // filter the session list
      this.filterSessions(this.filterBy);

      // sort the session list
      switch (this.sortBy) {
        case 'name':
          this.visibleSessions.sort(sortByNameAsc);
          break;
        case 'voters':
          this.visibleSessions.sort(sortByVotesDesc);
          break;
        default:
          return this.visibleSessions;
      }
    }
  }

  filterSessions(filter) {
    // if the filter is set to 'all', just return the whole list
    // use [...this.sessions] or this.session.slice(0) to clone the session list
    if (filter === 'all') {
      this.visibleSessions = [...this.sessions];
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

// sort by name helper function
function sortByNameAsc(session1: ISession, session2: ISession) {
  if (session1.name > session2.name) {
    return 1;
  } else if (session1.name === session1.name) {
    return 0;
  } else {
    return -1;
  }
}

// sort by voter helper function
function sortByVotesDesc(session1: ISession, session2: ISession) {
  return session2.voters.length - session1.voters.length;
}
