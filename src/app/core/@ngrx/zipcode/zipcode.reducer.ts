import { Action, createReducer, on } from '@ngrx/store';
import { initialZipcodeState, ZipcodeState } from './zipcode.state';
import * as ZipCodeActions from './zipcode.actions';

export const zipcodeFeatureKey = "zipcode";

const _zipcodeReducer = createReducer(
  initialZipcodeState,
  
  on(ZipCodeActions.loadZipCodes, state => {
    console.log('LOAD_ZIPCODES action being handled!');
    return { ...state };
  }),
  on(ZipCodeActions.addZipCode, (state, {zipcode}) => {
    console.log('ADD_ZIPCODE action being handled!');
    let newdata = [ ...state.data, zipcode ] ;
    return { ...state, data: newdata };
  }),
  on(ZipCodeActions.removeZipCode, (state, {zipcode}) => {
    console.log('REMOVE_ZIPCODE action being handled!');
    let newdata = state.data.filter(code => code !== zipcode);
    return { ...state, data: newdata };
  })
);

export function zipcodeReducer(state: ZipcodeState | undefined, action: Action) {
  return _zipcodeReducer(state, action);
}
