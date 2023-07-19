import './Athkar.css'

import React, { useEffect, useState } from 'react'
import AthkarBody from './AthkarBody'
import AthkarFooter from './AthkarFooter'
import AthkarHeader from './AthkarHeader'
import { getAlAdanDataAsync as getAlAthanDataAsync, getCurrentDate } from '../utils/timing'
import { getLatLongAsync } from '../utils/geoloc'
import { AthkarMainFile,getThikirAsync} from '../utils/athkar'
import useGlobalState, {selectedThikirState, athanDataState, athkarDataState} from '../globalState'
const Athkar = () => {

    const [selectedThikir, setSelectedThikir] = useGlobalState(selectedThikirState)
    const [athanData, setAthanData] = useGlobalState(athanDataState)
    const [athkarData, setAthkarData] = useGlobalState(athkarDataState)

    const [isInit, setIsInit] = useState(false)

    useEffect(() => {
        async function fetchAthanData() {
            const [lat, longt] = await getLatLongAsync();
            const [d, m, y] = getCurrentDate();
            const data = await getAlAthanDataAsync(d, m, y, lat, longt)
            setAthanData(data)
        }

        async function fetchAthkarData() {
            const data = await getThikirAsync(AthkarMainFile)
            if(data){
                for(let item of data){
                    let th = await getThikirAsync(item.name);
                    item.items = th;
                }
            }
            setAthkarData(data)
        }

        if(!isInit){
            setIsInit(true);
            fetchAthanData();
            fetchAthkarData();
            setSelectedThikir(0); //Todo - calculate that based on current time and salat time/shuruk/masaa
        }
    }, [isInit]);

    return (
        <>
            <div className='header athkar-header'>
                <AthkarHeader athanData={athanData} athkarData={athkarData}/>
            </div>

            <div className='content'>
                <AthkarBody setSelectedThikir={setSelectedThikir} athanData={athanData} athkarData={athkarData}/>
            </div>

            <div className='footer'>
                <AthkarFooter />
            </div>
        </>
    )
}

export default Athkar