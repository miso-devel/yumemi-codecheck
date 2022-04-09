import { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "./Checkbox";
export const Prefectures = ({
  checkList,
  setCheckList,
  population,
  setPopulation,
}) => {
  // 都道府県の情報一覧を管理するstate
  const [prefectures, setPrefectures] = useState([]);
  console.log("Prefecture");
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

  //   return
  return (
    <div>
      <div className="grid text-size">
        {prefectures.map((p) => {
          return (
            <div key={p.prefName}>
              <div className="flex">
                <Checkbox
                  checkList={checkList}
                  setCheckList={setCheckList}
                  prefecture={p}
                  population={population}
                  setPopulation={setPopulation}
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
