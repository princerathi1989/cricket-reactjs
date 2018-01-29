import React from 'react';
import Player from './Player.jsx';

function PlayersList (props) {    
    return (
        <div className="players-list">
            <ul>
                {props.players.map((player) => 
                    <Player player={player} />
                )}                    
            </ul>                               
        </div>
    );
}

export default PlayersList;