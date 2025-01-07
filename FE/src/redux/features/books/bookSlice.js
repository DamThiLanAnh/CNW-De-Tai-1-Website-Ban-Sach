import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loadingGlobal: false,
  listBooks: [],
};
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await fetch("/books.json");
    const formated = await response.json();
    return formated;
  } catch (error) {
    throw error;
  }
});
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loadingGlobal = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loadingGlobal = false;
        state.listBooks = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loadingGlobal = false;
        state.listBooks = [];
      });
  },
});

export default bookSlice.reducer;
