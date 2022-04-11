import { useState, useEffect } from "react";
import axios from "axios";
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
      //すでにある場合(その番号を含むpopulationの削除)
      let tmp = [];
      population.map((p) => {
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
};
