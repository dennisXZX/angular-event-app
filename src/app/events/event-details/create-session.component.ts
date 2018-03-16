import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../index";
import { restrictedWords } from "../shared/restricted-words-validator";

@Component({
  selector: 'create-session',
  templateUrl: 'create-session.component.html',
  styleUrls: ['create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      // apply a custom validator function 'this.restrictedWords'
      Validators.required, Validators.maxLength(600), restrictedWords(['foo', 'bar'])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: parseInt(formValues.duration, 10),
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };

    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

}
