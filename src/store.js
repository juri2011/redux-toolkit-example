import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const store = configureStore({
  reducer: {
    //counterSlice의 reducers들을 모아 만든 하나의 reducer를 반환
    counter: counterSlice.reducer,
  },
});

export default store;
