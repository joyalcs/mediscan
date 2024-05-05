import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pincode: null,
  medicine: null
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchDetails: (state, action) => {
      state.pincode = action.payload.pincode;
      state.medicine = action.payload.medicine;
    },
    unsetSearchDetails: (state) => {
      state.pincode = null;
      state.medicine = null;
    }
  }
});

export const { setSearchDetails, unsetSearchDetails } = searchSlice.actions;
export default searchSlice.reducer;
