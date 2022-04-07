import "./App.css";
import { Prefectures } from "./components/Prefectures/Prefecture";
import { useState } from "react";
function App() {
  const [prefectures, setPrefectures] = useState([]);
  return (
    <div className="App">
      <p>App Component</p>
      <Prefectures prefectures={prefectures} setPrefectures={setPrefectures} />
    </div>
  );
}

export default App;
