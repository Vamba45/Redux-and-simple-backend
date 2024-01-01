import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./store/asyncActions/customers";

export default function Application () {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: "id:" + name 
        }

        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div>{cash}</div>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
            <button onClick={() => addCash(Number(prompt()))}>Положить на счёт</button>
            <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
            <button onClick={() => removeCustomer(prompt())}>Удалить клиента</button>
            <button onClick={() => dispatch(fetchCustomers())}>Загрузить клиентов</button>
            {customers.length > 0 ?
                <div>
                    {
                        customers.map(customer => 
                            <div onClick={() => removeCustomer(customer)}>
                                {customer.name}
                            </div>
                        )
                    }
                </div> :
                <div>
                    Клиенты отсутствуют
                </div>
            }
        </div>
    )
}