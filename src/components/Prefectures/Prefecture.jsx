import { useState, useEffect, memo } from "react";
import axios from "axios";
// eslint-disable-next-line react/display-name
export const Prefectures = memo(({ checkList, onChange }) => {
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
                  checked={checkList[prefectures]}
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
});
