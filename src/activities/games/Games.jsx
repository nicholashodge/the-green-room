import { useEffect, useState } from "react";
import './Game.css'
import { getAllGames } from "../../services/activityService";
import { Game } from "./Game";

export const Games = () => {
    const [allGames, setAllGames] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            //fetch the data for Activity components
            const gameData = await getAllGames()

            //set data for Activity components
            setAllGames(gameData)
        }
        fetchData()
    },[])

    return (
        <div className="games-container">
            <div className="games-title"> <h2>Short Form Games</h2></div>
            <div className="games-body-container">
                <ul className="game-body">
                    {allGames.map((gameObject) => {
                        return <Game gameObject={gameObject} key={gameObject.id} />
                    })}
                </ul>
            </div>
        </div>
    )

}