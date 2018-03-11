import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'create-event.component.html'
})
export class CreateEventComponent {
  isDirty: boolean;

  constructor(private router: Router) {
    this.isDirty = true;
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
