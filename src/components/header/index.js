import React from "react";
import "./styles.scss";
export default function Header() {
  return (
    <header data-test="headerCom" className="headerCom">
      <div data-test="wrap" className="wrap">
        <div data-test="logo" className="logo">
          AG
        </div>
      </div>
    </header>
  );
}
