import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { zipcodeReducer } from '../core/@ngrx';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';

@NgModule({
  declarations: [ ZipcodeEntryComponent ],
  imports: [
    CommonModule,
    StoreModule.forFeature("zipcodes", zipcodeReducer)
  ]
})
export class ZipcodeModule { }
