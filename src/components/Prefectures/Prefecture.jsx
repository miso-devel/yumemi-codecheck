import { useState, useEffect } from "react";
import axios from "axios";
export const Prefectures = ({ population, setPopulation }) => {
  // 都道府県の情報一覧を管理するstate
  const [prefectures, setPrefectures] = useState([]);
  // 都道府県 APIの取得
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_RESAS_API;
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": API_KEY },
      })
      .then((res) => {
        setPrefectures(res.data.result);
      });
  }, []);

  // checkした時の挙動
  const onChange = (e) => {
    // populationに入っているprefCodeの一覧
    const PrefCodes = population.map((n) => {
      return n.prefCode;
    });
    // checkされた都道府県がPrefcodesに入ってるか入っていないかの条件分岐
    if (PrefCodes.includes(e.target.id)) {
      // [すでに入っていた場合]filterしてすでにある都道府県を取り除く
      let tmp = [];
      population.filter((p) => {
        if (p.prefCode !== e.target.id) {
          tmp.push(p);
        }
      });
      setPopulation(tmp);
    } else {
      // [入っていなかった場合]都道府県の人口推移データの追加
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
          const populations = res.data.result.data[0].data.map((p) => {
            return p.value;
          });
          // 年を配列にしたもの;
          const years = res.data.result.data[0].data.map((p) => {
            return p.year;
          });
          setPopulation([
            ...population,
            {
              prefCode: e.target.id,
              name: e.target.value,
              data: populations,
              years: years,
            },
          ]);
        })
        .catch((error) => {
          console.log("通信失敗");
          console.log(error.status);
        });
    }
  };
  //   return
  return (
    <div>
      <div className="grid text-size">
        {prefectures.map((p) => {
          return (
            <div key={p.prefName}>
              <div className="flex">
                <input
                  type="checkbox"
                  value={p.prefName}
                  id={p.prefCode}
                  onChange={onChange}
                />
                <p className="pref-text">{p.prefName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
