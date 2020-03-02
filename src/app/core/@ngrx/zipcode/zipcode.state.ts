import { createSelector } from '@ngrx/store';

export interface ZipcodeState {
    data: ReadonlyArray<String>;
  }
  
export const initialZipcodeState: ZipcodeState = {
    data: [
        "111111",
        "222222",
        "333333"
    ]
};
