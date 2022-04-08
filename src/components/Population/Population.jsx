import axios from "axios";
import { useEffect } from "react";
import { Charts } from "./Charts";
export const Population = ({ checkList, population, setPopulation }) => {
  // 人口の取得
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_RESAS_API;
    // checkListのprefCodeを回して取得、取得したデータをpopulationに入れる
    checkList.map((c) => {
      axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${Number(
            c.prefCode
          )}`,
          {
            headers: { "X-API-KEY": API_KEY },
          }
        )
        .then((res) => {
          // 人口を配列にしたもの
          const populations = res.data.result.data[0].data.map((r) => {
            return r.value;
          });
          // 年を配列にしたもの
          const years = res.data.result.data[0].data.map((r) => {
            return r.year;
          });
          // 重複があれば重複を削除
          setPopulation(
            [
              ...population,
              {
                prefCode: c.prefCode,
                name: c.prefName,
                data: populations,
                years: years,
              },
            ].filter(
              (element, index, self) =>
                self.findIndex((e) => e.prefCode === element.prefCode) === index
            )
          );
        });
    });
  }, [checkList]);
  console.log(population);
  return (
    <div>
      <p>Population</p>
      <Charts population={population} />
    </div>
  );
};
