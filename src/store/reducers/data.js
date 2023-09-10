import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
 name: 'DATA',
 initialState: {
  'DATA': {
   Applied: [],
   Accepted: [],
   Rejected: [],
  }
 },
 reducers: {
  addAcceptedCandidates: (data, action) => {
   data.DATA.Accepted.push(action.payload);
  },
  addAppliedCandidates: (data, action) => {
   data.DATA.Applied.push(action.payload);
  },
  addRejectedCandidates: (data, action) => {
   data.DATA.Rejected.push(action.payload);
  }
 }
})


export const { addAcceptedCandidates, addAppliedCandidates, addRejectedCandidates } = slice.actions;
export default slice.reducer;