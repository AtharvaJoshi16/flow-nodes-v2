import { HANDLE_POSITIONS } from "@/app/constants/options";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Options {
  handlePosition: any;
}

const initialState: Options = {
  handlePosition: HANDLE_POSITIONS[0],
};

export const optionsSlice: any = createSlice({
  name: "options",
  initialState,
  reducers: {
    updateHandlePosition: (state, action: PayloadAction<any>) => {
      state.handlePosition = action.payload;
    },
  },
});

export const { updateHandlePosition } = optionsSlice.actions;
export default optionsSlice.reducer;
