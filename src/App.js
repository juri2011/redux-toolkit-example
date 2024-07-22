import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

function reducer(state, action){
  var newState = {...state};
  return newState;
}

const initialState = {value:0}
const store = createStore(reducer, initialState);

function Counter(){
  const count = useSelector(state => state.value);
  return <div>
    <button>+</button> {count}
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
