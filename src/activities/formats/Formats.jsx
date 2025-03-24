import { useEffect, useState } from "react";
import './Format.css'
import { getAllFormats } from "../../services/activityService";
import { Format } from "./Format";

export const Formats = () => {
    const [allFormats, setAllFormats] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            //fetch the data for Activity components
            const formatData = await getAllFormats()

            //set data for Activity components
            setAllFormats(formatData)
        }
        fetchData()
    },[])

    return (
        <div className="formats-container">
            <div className="formats-title"> <h2>Long Form Formats</h2></div>
            <div className="formats-body-container">
                <ul className="format-body">
                    {allFormats.map((formatObject) => {
                        return <Format formatObject={formatObject} key={formatObject.id} />
                    })}
                </ul>
            </div>
        </div>
    )

}