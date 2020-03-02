import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectZipcodeList } from 'src/app/core/@ngrx';
import * as ZipCodeActions from 'src/app/core/@ngrx';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
    zipcodes: ReadonlyArray<String>;
    currentConditions: Map<string, any>;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.store
            .select(selectZipcodeList)
            .subscribe(zips => this.zipcodes = zips);        
    }

    addLocation(zip: string){
        this.store.dispatch(ZipCodeActions.addZipCode( {zipcode: zip} ));
    }

    removeZip(zip: string) {
        this.store.dispatch(ZipCodeActions.removeZipCode( {zipcode: zip} ));
    }
}
