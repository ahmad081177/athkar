import './AthkarBodyHeader.css'
import React from 'react'
import useGlobalState, { selectedThikirState } from '../globalState'

const AthkarBodyHeader = (props) => {
    //props:  athanData athkarData
    //const [athkarData, setAthkarData] = useGlobalState(athkarDataState);
    const [selectedThikir, foo] = useGlobalState(selectedThikirState);

    const ThikirCards = () => props.athkarData.map((thikir, index) => {
        return (
            <button onClick={() => onThikir(thikir.id)} key={thikir.id} className="btn btn-primary card-hover bg-info text-white">
                {thikir.title}
            </button>
        )
    });

    const onThikir = (id) => {
        props.setSelectedThikir(id)
    }
    return (
        <div className="card-group2 card-group p-2 bd-highlight">
            {props.athkarData && (
                <ThikirCards />
            )}
        </div>
    )
}

export default AthkarBodyHeader