import React from 'react'
import AthkarBodyItems from './AthkarBodyItems'
import AthkarBodyHeader from './AthkarBodyHeader'

const AthkarBody = (props) => {
    //props :  athanData={athanData} athkarData={athkarData} setSelectedThikir={setSelectedThikir}
    return (
        <>
            <AthkarBodyHeader {...props}></AthkarBodyHeader>
            <AthkarBodyItems {...props}></AthkarBodyItems>
        </>
    )
}

export default AthkarBody