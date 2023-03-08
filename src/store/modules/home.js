import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const homeSlice = createSlice({
  name: "home", //
  initialState: {
    counter: 1000,
    homeInfo: {},
  },
  reducers: {
    increment(state, { payload }) {
      // action: { type:home/increment/状态, payload: 1 }
      console.log("payload=>", payload);
      state.counter += payload;
    },
  },
  extraReducers: (builder) => {
    // type: fetchHomeData/状态
    builder.addCase(fetchHomeData.fulfilled, (state, { payload, type }) => {
      console.log("type=>", type);
      console.log("payload=>", payload);
      state.homeInfo = payload;
    });
  },
});

// 异步的action -> axios
export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  async (payload, { dispatch, getState }) => {
    const res = await axios.get("http://xxx.com");
    return res.data;
  }
);

// 同步的 action
export const { increment } = homeSlice.actions;
// home 切片生成的 reducer
export default homeSlice.reducer;
