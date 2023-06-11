import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
     increment: (state) => {
       state.value += 1;
     },
     decrement: (state) => {
       state.value -= 1;
     },
     incrementByAmount: (state, action) => {
       state.value += action.payload;
     }
   }
 });

// Export reducers as actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Export State Value
export const selectCount = (state) => state.counter.value;
// Export Reducer
export default counterSlice.reducer;