import { ZipcodeState } from "./zipcode";
import { createSelector } from '@ngrx/store';

export interface AppState {
    zipcodeState: ZipcodeState;
}
  
  
export const selectZipcodeState = (state: AppState) => state.zipcodeState;

export const selectZipcodeList = createSelector(selectZipcodeState, (state: ZipcodeState) => state.data);
