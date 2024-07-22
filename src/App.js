import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

function reducer(state, action){
  var newState = {...state};
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
