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
  //checkListにcheckした要素を追加
  const onChange = (e) => {
    // 取得した都道府県のnum
    const Nums = checkList.map((n) => {
      return n.prefCode;
    });

    if (Nums.includes(e.target.id)) {
      // すでにある場合(その番号を含むcheckListの削除)
      setCheckList(
        checkList.filter((f) => {
          return f.prefCode !== e.target.id;
        })
      );
      // すでにある場合(その番号を含むpopulationの削除);
      let tmp = [];
      population.filter((p) => {
        if (p.prefCode !== e.target.id) {
          tmp.push(p);
        }
      });
      setPopulation(tmp);
    } else {
      // 番号がない場合（単純な追加）
      setCheckList([
        ...checkList,
        { prefName: e.target.value, prefCode: e.target.id },
      ]);
    }
  };
  return (
    <div className="App">
      <Header />
      <Prefectures checkList={checkList} onChange={onChange} />
      <Population
        onChange={onChange}
        checkList={checkList}
        population={population}
        setPopulation={setPopulation}
      />
    </div>
  );
}

export default App;
