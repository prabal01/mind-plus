import { get } from "idb-keyval";
import React, { useEffect, useState } from "react";
import CBottomBar from "../commonComponents/CBottomBar/CBottomBar";
import style from "./style.module.css";
export default function Homepage() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    get("userName").then((userName) => {
      setUserName(userName);
    });
  }, []);

  // bottom bar buttons
  const buttons = [
    {
      key: "addNewButton",
      icon: "playlist_add",
      selected: true,
      size: 42,
    },
    {
      key: "practiceButton",
      icon: "library_books",
      selected: false,
      size: 35,
    },
  ];

  return (
    <div className={style.homePageWrapper}>
      
      <p className={style.headerTxt}> Add new Question </p>
      <input
            type="text"
            className={style.nameField}
            placeholder="fill your name here..."
          />
        <CBottomBar buttons={buttons}/>
    </div>
  );
}
