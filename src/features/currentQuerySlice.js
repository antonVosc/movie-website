import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contries: "",
  genreId: "",
  order: "YEAR",
  type: "",
  year: "",
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: "currentQuerySlice",
  initialState,
  reducers: {},
});

export default currentQuerySlice.reducer;
