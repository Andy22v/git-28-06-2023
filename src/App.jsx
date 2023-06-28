import Counter from "./components/counter";
import Count from "./components/Count";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counters">
        <Count />
        <Counter />
      </div>
    </div>
  );
}

export default App;
