import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'create-event.component.html'
})
export class CreateEventComponent {
  isDirty: boolean;

  constructor(private _router: Router) {
    this.isDirty = true;
  }

  cancel() {
    this._router.navigate(['/events']);
  }
}
