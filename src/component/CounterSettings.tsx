import React, {ChangeEvent} from 'react';
import st from './CounterSettings.module.css';
import {Button} from "./Button";
import {PATH} from "../App";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {CounterStateType, setNumberAC} from "../state/counterReducer";


export const CounterSettings = () => {

    const state = useSelector<RootStateType, CounterStateType>(state => state.counterR);

    const dispatch = useDispatch();


    const onClickSettings = () => {
        console.log(state.startNumber)
        console.log(state.limitNumber)
        state.actualNumber = state.startNumber
    }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, whichNumber: string) => {
        dispatch(setNumberAC(Number(e.currentTarget.value), whichNumber));
    }


    // @ts-ignore
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>, whichNumber: string) => {
        if (e.key === 'Enter') {
            dispatch(setNumberAC(Number(e.currentTarget.value), whichNumber));
            console.log("StartNumber " + state.startNumber)
            console.log("LimitNumber " + state.limitNumber)
            console.log(whichNumber)
            console.log(state)


        }
    }

    return (
        <div className={st.App}>
            <div className={st.tablo}>
                <div className={st.input_comp}>
                    <h2>max value:</h2>
                    <input
                        type="number"
                        placeholder={state.limitNumber.toString()}
                        className={state.limitNumber <= state.startNumber ? st.errorInput : ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>, whichNumber: string = "limitNumber") => onChangeCallback(e, whichNumber)}
                        onKeyPress={(e, whichNumber: string = "limitNumber") => onKeyPressCallback(e, whichNumber)}
                    />
                </div>
                <div className={st.input_comp}>
                    <h2>start value:</h2>
                    <input
                        type="number"
                        placeholder={state.startNumber.toString()}
                        className={state.startNumber >= state.limitNumber ? st.errorInput : ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>, whichNumber: string = "startNumber") => onChangeCallback(e, whichNumber)}
                        onKeyPress={(e, whichNumber: string = "startNumber") => onKeyPressCallback(e, whichNumber)}
                    />

                </div>
            </div>

            <div className={st.space}></div>

            <div className={st.buttons}>
                <NavLink to={PATH.COUNTER}>
                    <Button disabled={false} name={'Set'} callBack={onClickSettings}/>
                </NavLink>
            </div>

        </div>

    );
}


