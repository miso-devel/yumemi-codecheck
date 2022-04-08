import "./assets/Prefectures.css";
import "./assets/Prefectures-sm.css";
import { Prefectures } from "./components/Prefectures/Prefecture";
import { Population } from "./components/Population/Population";
import { useState } from "react";
function App() {
  // 都道府県の情報一覧を管理するstate
  const [prefectures, setPrefectures] = useState([]);
  // checkした都道府県を管理するstate
  const [checkList, setCheckList] = useState([]);
  // 都道府県の人口を管理するstate
  const [population, setPopulation] = useState([{}]);
  return (
    <div className="App">
      <Prefectures
        prefectures={prefectures}
        setPrefectures={setPrefectures}
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
