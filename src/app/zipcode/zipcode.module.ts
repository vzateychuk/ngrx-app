import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { zipcodeReducer } from '../core/@ngrx';
import { ZipcodeEntryComponent, ZipcodeListComponent } from '.';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [ 
    ZipcodeListComponent,
    ZipcodeEntryComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("zipcodeState", zipcodeReducer)
  ]
})
export class ZipcodeModule { }
