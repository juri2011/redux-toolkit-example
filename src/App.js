import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
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
})
/*

function reducer(state, action){
  var newState = {...state};
  if(action.type === 'UP'){
    return {...state, value:state.value + action.step}
  }
  return newState;
}

const initialState = {value:0}
const store = createStore(reducer, initialState);
*/
function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state =>{
    console.log(state);//counter가 출력됨
    return state.counter.value;
  });
  return <div>
    <button onClick={()=>{
      //counterSlice의 이름/action으로 명명
      //dispatch({type:'counterSlice/up', step:2});
      //redux-toolkit은 reducer를 참고해서 자동으로 액션을 만들어줌
      //인자로 전달된 값은 reducer에서 payload로 받음
      dispatch(counterSlice.actions.up(2));
    }}>+</button> {count}
  </div>
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
