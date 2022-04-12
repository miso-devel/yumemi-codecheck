import "./assets/Prefectures.css";
import "./assets/Prefectures-sm.css";
import { Prefectures } from "./components/Prefectures/Prefecture";
import { Population } from "./components/Population/Population";
import { Header } from "./components/layouts/Header";
import { useState } from "react";
function App() {
  // 都道府県の人口を管理するstate
  const [population, setPopulation] = useState([{}]);

  return (
    <div className="App">
      <Header />
      <Prefectures population={population} setPopulation={setPopulation} />
      <Population population={population} />
    </div>
  );
}

export default App;
