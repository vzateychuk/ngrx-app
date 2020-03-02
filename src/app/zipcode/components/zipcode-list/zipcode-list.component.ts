import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/core/@ngrx';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-zipcode-list',
  templateUrl: './zipcode-list.component.html'
})
export class ZipcodeListComponent {

  @Input() zipcodes: ReadonlyArray<String>
  @Input() currentConditions: Map<string, any>;
  @Output() zipRemoved = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  showForecast(zipcode: string) {
    this.router.navigate(["/forecats", zipcode]);
  }

}
