import './AthkarHeader.css'
import { getDates } from '../utils/timing'

const AthkarHeader = (props) => {
    //athanData, athkarData
    let dates = '';
    if (props.athanData && !dates)
        dates = getDates(props.athanData)

    return (
        <>
                {dates && <h5>{dates[1]}</h5>}
                <h1>الأذكار</h1>
                {dates && <h5>{dates[0]}</h5>}
        </>
    )
}

export default AthkarHeader