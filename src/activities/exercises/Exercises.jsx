import { useEffect, useState } from "react";
import './Exercise.css'
import { getAllExercises } from "../../services/activityService";
import { Exercise } from "./Exercise";

export const Exercises = () => {
    const [allExercises, setAllExercises] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            //fetch the data for Activity components
            const exerciseData = await getAllExercises()

            //set data for Activity components
            setAllExercises(exerciseData)
        }
        fetchData()
    },[])

    return (
        <div className="exercises-container">
            <div className="exercises-title"> <h2>Rehearsal Exercises</h2></div>
            <div className="exercises-body-container">
                <ul className="exercise-body">
                    {allExercises.map((exerciseObject) => {
                        return <Exercise exerciseObject={exerciseObject} key={exerciseObject.id} />
                    })}
                </ul>
            </div>
        </div>
    )

}