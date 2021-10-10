import React from 'react'
import urls from '../../configMap'
import { appName } from '../../globalConstants'
import style from './style.module.css'
import SmoothList from 'react-smooth-list';
import { CButton } from '../commonComponents/CButton';


export default function WelcomePage() {
    const welcomeImg = urls.imgKitUrl+"/welcomeImg"
    return (
        <div className={style.welcomePageWrapper}>
            <img src={welcomeImg} className={style.welcomeImg}/>
            <div className={style.welcomeTextAndButton}>
                <SmoothList>
            <p>Hi, My name is {appName}. What's your? </p>
                <input type="text" className={style.nameField} placeholder='fill your name here...'/>
            <div className={style.buttonDiv}>
                <CButton w='120px' className='nextButton'>Next →</CButton>
            </div>
                </SmoothList>
            </div>
        </div>
    )
}