import React from 'react'
import useGlobalState, {  selectedThikirState } from '../globalState'
import ThikirCard from './card/ThikirCard';

const AthkarBodyItems = (props) => {
    //props: athanData={athanData} athkarData={athkarData}
    const [selectedThikir, ] = useGlobalState(selectedThikirState);

    const ThikirCards = (props) => props.athkarData[selectedThikir].items.data.map((element,index) => {
            return (
                <ThikirCard key={index} data={element} {...props}/>
            )
            });
   
    return (
        <div className='panel-body' style={{ textAlign: 'right', padding: '2em' }}>
            {props.athkarData &&
                <h1 className=''>{props.athkarData[selectedThikir].title}</h1>
            }
            {props.athkarData && props.athkarData[selectedThikir].items &&
                (
                    <ThikirCards {...props} />
                )
            }
        </div>
    )
}


export default AthkarBodyItems
