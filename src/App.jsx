import "./App.css";
import { Prefectures } from "./components/Prefectures/Prefecture";
import { useState } from "react";
function App() {
  // 都道府県の情報一覧を管理するstate
  const [prefectures, setPrefectures] = useState([]);
  return (
    <div className="App">
      <p>App Component</p>
      <Prefectures prefectures={prefectures} setPrefectures={setPrefectures} />
    </div>
  );
}

export default App;
