export const Format = ({formatObject}) => {
    return (
        <div className="formatObject">
            <div className="format-name">{formatObject.name}</div>
            <div className="format-description">{formatObject.description}</div>
        </div>
    )
}