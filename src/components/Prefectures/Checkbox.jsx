export const Checkbox = ({ checkList, setCheckList, prefName, prefCode }) => {
  const onChange = (e) => {
    if (checkList.includes(`${e.target.id}`)) {
      setCheckList(checkList.filter((c) => c !== e.target.id));
    } else {
      setCheckList([...checkList, e.target.id]);
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        value={prefName}
        id={prefCode}
        checked={checkList.includes(`${prefCode}`)}
        onChange={onChange}
      />
    </div>
  );
};
