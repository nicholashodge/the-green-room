export const Exercise = ({exerciseObject}) => {
    return (
        <div className="exerciseObject">
            <div className="exercise-name">{exerciseObject.name}</div>
            <div className="exercise-description">{exerciseObject.description}</div>
        </div>
    )
}