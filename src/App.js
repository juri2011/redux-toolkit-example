import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {createSlice} from '@reduxjs/toolkit';

//slice : 기능 하나를 위한 작은 store
const counterSlice = createSlice({
  name: 'counter',
  initialState: {value:0},
  reducers:{
    up:(state, action)=>{
      //객체의 불변성을 신경쓰면서 코드를 복잡하게 작성할 필요가 없다
      state.value = state.value + action.step;
    }
  }
});

function reducer(state, action){
  var newState = {...state};
  if(action.type === 'UP'){
    return {...state, value:state.value + action.step}
  }
  return newState;
}

const initialState = {value:0}
const store = createStore(reducer, initialState);

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state => state.value);
  return <div>
    <button onClick={()=>{
      dispatch({type:'UP', step:2});
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
