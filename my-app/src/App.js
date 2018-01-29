import React, { Component } from 'react';
import logo from './bcci-logo.png';
import './App.css';
import AddPlayerForm from './AddPlayerForm.jsx';
import PlayersList from './PlayersList.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">INDIAN CRICKET TEAM</h1>
                    <AddPlayerForm playerList = {this.props.players}/>
                </header>
                <div className ="players-list-wrapper">
                    <PlayersList players={this.props.players}/>
                </div>
            </div>
        );
    }
}

export default App;