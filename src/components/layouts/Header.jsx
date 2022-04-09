import "../../assets/Header.css";
import { memo } from "react";
// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  console.log("header");
  return (
    <div className="header">
      <p>都道府県/人口推移アプリ</p>
    </div>
  );
});
