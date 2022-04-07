import { useEffect } from "react";
import axios from "axios";
export const Prefectures = ({ prefectures, setPrefectures }) => {
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
  return (
    <div>
      <p>Prefectures</p>
      {prefectures.map((p) => {
        return (
          <div key={p.prefName}>
            <p>{p.prefName}</p>
          </div>
        );
      })}
    </div>
  );
};
