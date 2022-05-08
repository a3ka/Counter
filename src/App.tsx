import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Counter} from "./component/Counter";
import {CounterSettings} from "./component/CounterSettings";

export const PATH = {
    COUNTER: '/counter',
    COUNTER_SETTINGS: '/counter_settings',
}

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.COUNTER}/>}/>
                <Route path={PATH.COUNTER} element={<Counter/>}/>
                <Route path={PATH.COUNTER_SETTINGS} element={<CounterSettings/>}/>
            </Routes>
        </BrowserRouter>
    );


}

export default App;
