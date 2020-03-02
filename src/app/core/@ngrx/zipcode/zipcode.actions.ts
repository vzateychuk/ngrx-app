import { createAction, props } from "@ngrx/store";

export const LoadZipCodes = createAction(
  "[Zipcode] LOAD_ZIPCODES"
);

export const AddZipCode = createAction(
  "[Zipcode] ADD_ZIPCODE",
  props<{ zipcode: String }>()
);

export const RemoveZipCode = createAction(
  "[Zipcode] REMOVE_ZIPCODE",
  props<{ zipcode: String }>()
);
