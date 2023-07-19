import './CounterDownButton.css'
import React, { useState } from 'react'

const CounterDownButton = (props) => {
    //props.num, props.count
    const [count, setCount] = useState(props.count)

    const setCountDown = () => {
        if (count > 0) setCount(count - 1)
    }
    const onReset = () => {
        setCount(props.count)
    }
    return (

        <button className='bounterButton' title={count} value={count} onClick={() => { setCountDown() }} >
            <div>عدد المرّات - {count}</div>
            <div className='reset-button'>
               <strong> <i className="bi text-success bi-arrow-counterclockwise" onClick={() => { onReset() }}></i>
                <span>{props.count}</span></strong>
            </div>
        </button>

    )
}

export default CounterDownButton