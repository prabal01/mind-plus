import React from 'react'
import urls from '../../../configMap'
import style from './style.module.css'
import MaterialIcon from 'material-icons-react';


export default function CBottomBar({buttons}) {
// button structure shoulle be like:-
//     const buttons = [{
//         key: 'addNewButton',
//         icon: 'playlist_add',
//         selected: true,
//         size: 42
//     },
// {
//     key: 'practiceButton',
//     icon: 'library_books',
//     selected: false,
//     size:35
// },
// ] 
    return (
        <div className={style.bottomBarDiv}>
            {buttons.map((button)=>{
                return (
                <div id = {button.key} className = {style.bottomButton}>
                    <MaterialIcon icon = {button.icon} inactive={!button.selected} color={button.selected ? '#605ff6' : '#5f5ff6c0'} size = {button.size}/>
                </div>
                    )
            })}            
        </div>
    )
}
