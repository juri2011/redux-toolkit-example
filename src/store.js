import {createSlice, configureStore} from '@reduxjs/toolkit';

//slice : 기능 하나를 위한 작은 store
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {value:0},
  reducers:{
    up:(state, action)=>{
      //객체의 불변성을 신경쓰면서 코드를 복잡하게 작성할 필요가 없다
      //payload는 자동으로 생성된 액션 크리에이터로 값을 전달받을 때 사용됨
      state.value = state.value + action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    //counterSlice의 reducers들을 모아 만든 하나의 reducer를 반환
    counter: counterSlice.reducer
  }
});

export default store;