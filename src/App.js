import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  // use selecter is used to retrieve an state value in redux store
  const { count } = useSelector((state) => state.counter);

  // useDispatch is used to initiate an action in that state.
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>Current Value:{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* how to change an state with a payload , for example this button is going
      to increment the count by 35 */}
      <button onClick={() => dispatch(incrementByAmount(35))}>
        Increment by 35
      </button>
    </div>
  );
}

export default App;
