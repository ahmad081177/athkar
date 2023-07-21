import CounterDownButton from './CounterDownButton'
import './ThikirCard.css'
import React, { useEffect, useRef, useState } from 'react'

const ThikirCard = (props) => {
    //props.id, props.data
    const elmRef = useRef(null)
    const [count, setCount] = useState(props.data.count)
    
    useEffect(() => {
        if (count === 0){
            elmRef.current.style.backgroundColor='#ace9ba';
        }
        else{
            elmRef.current.style.backgroundColor='#f8f9fa';
        }
    }, [count])

    return (
        <div key={props.data.id}  className='card img-rounded equalizer col-a col-xs-12 col-ms-12 col-sm-12 col-md-12 equal-height text-dark bg-light mb-3 border-success' style={{ borderBottom: '1px solid'}}>
            <div className="card-header thikir-card-header">
                دعاء #: {props.data.id + 1}
                <CounterDownButton count={count} setCount={setCount} total={props.data.count} />
            </div>
            <div ref={elmRef} className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.content}</p>
                {props.data.ref && <p>{props.data.ref}</p>}
            </div>
            <div className="card-footer">
                {props.data.info && <small className=" text-success"><strong>{props.data.info}</strong></small>}
            </div>
        </div>
    )
}

export default ThikirCard