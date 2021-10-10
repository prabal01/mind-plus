import React from "react";
import urls from "../../configMap";
import { appName } from "../../globalConstants";
import style from "./style.module.css";
import SmoothList from "react-smooth-list";
import { CButton } from "../commonComponents/CButton";
import { useState } from "react";
import { CErrorMsg } from "../commonComponents/CErrorMessage";
import { set } from "idb-keyval";
const welcomeImg = urls.imgKitUrl + "/welcomeImg";

export default function WelcomePage() {
  const [textFieldVal, setTextFieldVal] = useState("");
  const [invalidName, SetInvalidName] = useState(false)
    // onclick of button check if the name entered is valid 
    const saveName = ()=>{
        if (textFieldVal.length <= 3){
            SetInvalidName(true)
        } else{
            set('isLoggedIn',true,).then(()=>{
                console.log('logged in succesfully!')
                set('userName',textFieldVal,).then(()=>{
                    console.log('name saved successfully')
                    window.location.reload()
                })
            })
        }
    }

  return (
    <div className={style.welcomePageWrapper}>
      <img src={welcomeImg} className={style.welcomeImg} alt='homepage-img' />
      <div className={style.welcomeTextAndButton}>
        <SmoothList>
          <p>
            Hi, My name is <span className={style.appName}>{appName}</span>.
            What's your?{" "}
          </p>
          {invalidName && <CErrorMsg>Invalid Name! Name should contain atleast 4 characters</CErrorMsg>}
          <input
            onChange={(e) => setTextFieldVal(e.target.value)}
            type="text"
            className={style.nameField}
            placeholder="fill your name here..."
          />
          <div className={style.buttonDiv}>
            <CButton
              w="120px"
              className="nextButton"
              onClick={() => {
                saveName();
                console.log(textFieldVal);
              }}
            >
              Next →
            </CButton>
          </div>
        </SmoothList>
      </div>
    </div>
  );
}
