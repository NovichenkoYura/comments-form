import { createSlice } from "@reduxjs/toolkit";


const noteSlice = createSlice({
  name: "note",
  initialState: {
    value: 43,
  },

   reducers: {    
    setValue(state, action) {
      state.value = action.payload;
     },   
    
  },
});

export const {
  onCurrentItemInfo,
  sortTitle,
  sortDate,
  searchTitleInfo,
} = noteSlice.actions;
export default noteSlice.reducer;

