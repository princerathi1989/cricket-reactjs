import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class AddPlayerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            id : "",
            value : "selectRole"
        };

        this.handleName = this.handleName.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleName(event){
        this.setState({name : event.target.value});
        var str = this.state.name.split(" ");
        var idStr = "";
        str.forEach(function(elem, index){
            idStr += str[index].charAt(0).toLowerCase();
        }) 
        this.setState({id : idStr});
    }
    handleRole(event){
        this.setState({value : event.target.value});
    }
    handleSubmit(event){      
        const player = { 
            id: this.state.id, 
            name: this.state.name, 
            role: this.state.value
        };
        this.props.playerList.push(player); 
        ReactDOM.render(<App players={this.props.playerList}/>, document.getElementById('root'));
        //alert("The name is " + player.name + " and the role is " + player.role + " and the id is " + player.id);
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="name-form">
                <h3>Add Player</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Player's Name" type="text" value={this.state.name} onChange={this.handleName}/>
                    <select value={this.state.value} onChange={this.handleRole}>
                        <option value="Select Role">Select Role</option>
                        <option value="Batsman">Batsman</option>
                        <option value="Bowler">Bowler</option>
                        <option value="Allrounder">Allrounder</option>
                        <option value="Wicket-Keeper">Wicket-Keeper</option>
                    </select>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default AddPlayerForm;