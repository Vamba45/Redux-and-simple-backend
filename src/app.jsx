import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Application () {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    return (
        <div className="App">
            <div>{cash}</div>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
            <button onClick={() => addCash(Number(prompt()))}>Положить на счёт</button>
        </div>
    )
}