import React from "react";
import ReactDOM from "react-dom";
import style from "./main.less";

const Index = () => {
  return <div>Hello React!</div>;
};

const Search = () => {
    return <div className={style.search}>
        Hello Search Component :)
    </div>
};

ReactDOM.render(<Search />, document.getElementById("search"));

ReactDOM.render(<Index />, document.getElementById("index"));
