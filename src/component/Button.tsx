import React from 'react';

type propsButtonType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const Button = (props: propsButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    );
};