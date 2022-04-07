import { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "./Checkbox";
export const Prefectures = ({ prefectures, setPrefectures }) => {
  const [checkList, setCheckList] = useState([{}]);
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
  console.log(prefectures);
  //   return
  return (
    <div>
      <p>Prefectures</p>
      {prefectures.map((p) => {
        return (
          <div key={p.prefName}>
            <p>{p.prefName}</p>
            <Checkbox
              checkList={checkList}
              setCheckList={setCheckList}
              prefName={p.prefName}
              prefCode={p.prefCode}
            />
          </div>
        );
      })}
    </div>
  );
};
