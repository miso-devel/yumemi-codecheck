import "./assets/Prefectures.css";
import "./assets/Prefectures-sm.css";
import { Prefectures } from "./components/Prefectures/Prefecture";
import { Population } from "./components/Population/Population";
import { Header } from "./components/layouts/Header";
import { useState } from "react";
import axios from "axios";
function App() {
  // 都道府県の人口を管理するstate
  const [population, setPopulation] = useState([{}]);
  // populationに入っているprefCodeの一覧
  const onChange = (e) => {
    const Nums = population.map((n) => {
      return n.prefCode;
    });
    if (Nums.includes(e.target.id)) {
      let tmp = [];
      population.filter((p) => {
        if (p.prefCode !== e.target.id) {
          tmp.push(p);
        }
      });
      setPopulation(tmp);
    } else {
      const API_KEY = process.env.REACT_APP_RESAS_API;
      axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${e.target.id}`,
          {
            headers: { "X-API-KEY": API_KEY },
          }
        )
        .then((res) => {
          // 人口を配列にしたもの;
          const populations = res.data.result.data[0].data.map((r) => {
            return r.value;
          });
          // 年を配列にしたもの;
          const years = res.data.result.data[0].data.map((r) => {
            return r.year;
          });
          setPopulation(
            [
              ...population,
              {
                prefCode: e.target.id,
                name: e.target.value,
                data: populations,
                years: years,
              },
            ].filter(
              (element, index, self) =>
                self.findIndex((e) => e.prefCode === element.prefCode) === index
            )
          );
        })
        .catch((error) => {
          // 通信エラーが発生したら
          console.log("通信失敗");
          console.log(error.status);
        });
    }
  };
  return (
    <div className="App">
      <Header />
      <Prefectures onChange={onChange} />
      <Population
        onChange={onChange}
        population={population}
        setPopulation={setPopulation}
      />
    </div>
  );
}

export default App;
