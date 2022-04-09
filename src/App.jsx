import "./assets/Prefectures.css";
import "./assets/Prefectures-sm.css";
import { Prefectures } from "./components/Prefectures/Prefecture";
import { Population } from "./components/Population/Population";
import { Header } from "./components/layouts/Header";
import { useState } from "react";
function App() {
  // checkした都道府県を管理するstate
  const [checkList, setCheckList] = useState([]);
  // 都道府県の人口を管理するstate
  const [population, setPopulation] = useState([{}]);
  return (
    <div className="App">
      <Header />
      <Prefectures
        checkList={checkList}
        setCheckList={setCheckList}
        population={population}
        setPopulation={setPopulation}
      />
      <Population
        checkList={checkList}
        population={population}
        setPopulation={setPopulation}
      />
    </div>
  );
}

export default App;
