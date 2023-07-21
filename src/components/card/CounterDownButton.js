import './CounterDownButton.css'
import React from 'react'

const CounterDownButton = (props) => {
    //props.num, props.count
    const setCountDown = (e) => {
        e.stopPropagation();
        if (props.count > 0) props.setCount(props.count - 1)
    }
    const onReset = (e) => {
        e.stopPropagation()
        props.setCount(props.total)
    }
    return (

        <button className='bounterButton' title={props.count} value={props.count} onClick={(e) => { setCountDown(e) }} >
            <div>عدد المرّات - {props.count}</div>
            <div className='reset-button'>
               <strong> <i className="bi text-success bi-arrow-counterclockwise" onClick={(e) => { onReset(e) }}></i>
                <span>{props.count}</span></strong>
            </div>
        </button>

    )
}

export default CounterDownButton