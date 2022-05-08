import React, {useState} from 'react';
import st from './App.module.css';
import {Button} from "./component/Button";


function App() {
    let [num, setNum] = useState(0)
    let [settings, setSettings] = useState(false)

    const onClickHandlerA = () => {
        setNum(num + 1);
    }
    const onClickHandlerB = () => {
        setNum(0);
    }


    const countLimit = 5;

        return (

            <div className={st.App}>

                <div className={st.tablo}>
                    <h1 className={num >= 5 ? st.limit : ''}>{num}</h1>
                </div>

                <div className={st.space}></div>

                <div className={st.buttons}>
                    <Button disabled={num === countLimit ? true : false} name={'Inc'} callBack={onClickHandlerA}/>
                    <Button disabled={num === 0 ? true : false} name={'Reset'} callBack={onClickHandlerB}/>
                </div>


            </div>

        );


}

export default App;
