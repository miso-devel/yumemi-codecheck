export const Checkbox = ({
  checkList,
  setCheckList,
  prefecture,
  population,
  setPopulation,
}) => {
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
  // return
  return (
    <div>
      <input
        type="checkbox"
        value={prefecture.prefName}
        id={prefecture.prefCode}
        checked={checkList[prefecture]}
        onChange={onChange}
      />
    </div>
  );
};
