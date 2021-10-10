import { get } from "idb-keyval";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
export default function Homepage() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    get("userName").then((userName) => {
      setUserName(userName);
    });
  }, []);
  return (
    <div className={style.homePageWrapper}>
        <div className={style.headerTxtWrapper}>
      <div>
        <p className={style.headerTxt}>Hi {userName},</p>
      </div>
      <div>
        <p className={style.headerTxt}>What would you like to do?</p>
      </div>
        </div>
    </div>
  );
}
