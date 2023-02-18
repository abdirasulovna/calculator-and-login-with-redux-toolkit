import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice;
// export const calculatorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case calculatorActionTypes.ADD:
//       return {
//         ...state,
//         result: state.result + action.payload,
//       };
//     default:
//       return state;
//     case calculatorActionTypes.SUBTRACT:
//       return {
//         ...state,
//         result: state.result - action.payload,
//       };

//     case calculatorActionTypes.DIVIDE:
//       return {
//         ...state,
//         result: state.result / action.payload,
//       };
//     case calculatorActionTypes.MULTIPLY:
//       return {
//         ...state,
//         result: state.result * action.payload,
//       };
//   }
// };
