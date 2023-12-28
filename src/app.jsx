import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Application () {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);
    console.log(cash)

    return (
        <div className="App">
            <button>Снять со счёта</button>
            <button>Положить на счёт</button>
        </div>
    )
}