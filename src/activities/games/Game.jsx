export const Game = ({gameObject}) => {
    return (
        <div className="gameObject">
            <div className="game-name">{gameObject.name}</div>
            <div className="game-description">{gameObject.description}</div>
        </div>
    )
}