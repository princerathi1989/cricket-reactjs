import React, { Component } from 'react';

class Player extends Component {
    constructor(props){
        super(props)
        this.state = {inSquad : false};
        this.squadToggle = this.squadToggle.bind(this);
    }  
    
    squadToggle(event) {
        this.setState(prevState => ({
            inSquad: !prevState.inSquad
        }));
    } 

    render(){
        return (
            <li className = {this.state.inSquad ? "included": ""} key = {this.props.player.name.toString()}>
                <div className ="player-info">
                    <div className="player-name">{this.props.player.name}</div>
                    <div className="player-role">{this.props.player.role}</div>                
                </div>
                <figure>
                    <img src={"images/" + this.props.player.id + ".jpg"} alt={this.props.player.name} />
                </figure>
                <button onClick={this.squadToggle}>{this.state.inSquad ? "Remove from Squad" : "Include in Squad" }</button>
            </li>
        );
    }
        
}
export default Player;