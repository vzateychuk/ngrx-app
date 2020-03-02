import { Action, createReducer, on } from '@ngrx/store';
import { initialZipcodeState, ZipcodeState } from "."
import { LoadZipCodes, AddZipCode, RemoveZipCode } from '.';

export const zipcodeFeatureKey = 'zipcode';

const _zipcodeReducer = createReducer(
  initialZipcodeState,
  
  on(LoadZipCodes, state => {
    console.log('LOAD_ZIPCODES action being handled!');
    return { ...state };
  }),
  on(AddZipCode, state => {
    console.log('ADD_ZIPCODE action being handled!');
    return { ...state };
  }),
  on(RemoveZipCode, state => {
    console.log('REMOVE_ZIPCODE action being handled!');
    return { ...state };
  })
);

export function zipcodeReducer(state: ZipcodeState | undefined, action: Action) {
  return _zipcodeReducer(state, action);
}
