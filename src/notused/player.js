import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Playerfunc =()=>{
    const [playerName,setPlayerName] = useState([]);
    const [playerPic,setPlayerPic] = useState([]);

    const fetchData =() =>{
        const PlayerApi ='https://www.balldontlie.io/api/v1/players/237';
        const playerPic ='https://nba-players.herokuapp.com/players/james/lebron';

        const getNBAPlayer=axios.get(PlayerApi)
        const getPlayerPic=axios.get(playerPic)

        axios.all([getNBAPlayer,getPlayerPic]).then(
            axios.spread((...allData) => {
            const allDataPlayers=allData[0].data.first_name
            const getNBAplayersPic=allData[1].confirg.url;

            setPlayerName(allDataPlayers)
            setPlayerPic(getNBAplayersPic)
        })
        )
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <div className="App">
            PlayerName is  : {playerName}
            <img src = {playerPic} />
        </div>
    );
}

export default Playerfunc;