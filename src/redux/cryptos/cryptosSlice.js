import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coincap.io/v2/assets';
export const searchCryptos = createAction('cryptos/searchCryptos');

export const getCryptos = createAsyncThunk(
  'games/getCryptos',
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.get(url);
      const result = res.data.data;
      return result;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

const initialState = {
  cryptos: [],
  isLoading: false,
  error: null,
  searchKeyword: '',
  filteredCryptos: [],
};

const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCryptos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptos = action.payload;
        state.filteredCryptos = action.payload;
      })
      .addCase(getCryptos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(searchCryptos, (state, action) => {
        const keyword = action.payload.toLowerCase();
        state.searchKeyword = keyword;
        state.filteredCryptos = state.cryptos.filter(
          (crypto) => crypto.name.toLowerCase().includes(keyword)
            || crypto.symbol.toLowerCase().includes(keyword),
        );
      });
  },
});

export default cryptosSlice.reducer;
