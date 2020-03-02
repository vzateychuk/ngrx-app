import { createAction, props } from "@ngrx/store";

export const loadZipCodes = createAction(
  "[Zipcode] LOAD_ZIPCODES"
);

export const addZipCode = createAction(
  "[Zipcode] ADD_ZIPCODE",
  props<{ zipcode: String }>()
);

export const removeZipCode = createAction(
  "[Zipcode] REMOVE_ZIPCODE",
  props<{ zipcode: String }>()
);
