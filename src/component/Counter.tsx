import React, {useState} from 'react';
import st from './Counter.module.css';
import {Button} from "./Button";
import {NavLink} from "react-router-dom";
import {PATH} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {CounterStateType, incrimentAC, resetAC} from "../state/counterReducer";


export const Counter = () => {

    const state = useSelector<RootStateType, CounterStateType>(state => state.counterR);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(incrimentAC());
    };

    const reset = () => {
        dispatch(resetAC());
    };


    return (

        <div className={st.App}>

            <div className={st.tablo}>
                <h1 className={state.actualNumber >= state.limitNumber ? st.limit : ''}>{state.actualNumber}</h1>
            </div>

            <div className={st.space}></div>

            <div className={st.buttons}>
                {/*<Button disabled={num === countLimit ? true : false} name={'Inc'} callBack={onClickHandlerA}/>*/}
                {/*<Button disabled={num === 0 ? true : false} name={'Reset'} callBack={onClickHandlerB}/>*/}

                <Button disabled={state.actualNumber === state.limitNumber ? true : false} name={'Inc'} callBack={inc}/>
                <Button disabled={state.actualNumber === state.startNumber ? true : false} name={'Reset'} callBack={reset}/>

                <NavLink to={PATH.COUNTER_SETTINGS}>
                    <Button disabled={false} name={'Settings'} callBack={()=>{}}/>
                </NavLink>
            </div>


        </div>

    );


}

