import React, { Component } from 'react';

export class NewGame extends Component {

    static displayname = NewGame.name;

    constructor(props) {
        super(props);
        this.state = {
            game: '',
            location: '',
            hole: [{
                distance: '',
                par: '',
            }],
            player: [{
                pname: '',
                score:''
            }],
            newGame: false
        }
        this.isNewGame = this.isNewGame.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSaveGame = this.onSaveGame.bind(this);
    }

    isNewGame() {
        this.setState({ newGame: true });
    }

    onSaveGame(event) {
        alert("You're Game " + this.state.game + " has been save!");
        event.preventDefualt();
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log("handleOnChangeFired");
    }

    static populateNewGame() {
        console.log("DO SOMETHING!!!!");
        return (
            <div>
                <form>
                    <label>
                        Game Name:  
                        <input
                            name="game" type="text" onChange={(event)=>NewGame.handleOnChange} />
                    </label>
                    <label>
                        Location: 
                        <input
                            name="location"
                            type="text"
                            onChange={()=>this.handleOnChange} />
                    </label>
                </form>
                <br />
                <br/>
                <button className="btn btn-primary" onClick={()=>this.onSaveGame}>Save Game</button>
            </div>
        );
    }

    render() {
        let contents = this.state.newGame
            ? NewGame.populateNewGame()
            : <p>Add new game here...<br/><button className="btn btn-primary" onClick={this.isNewGame}>New Game</button></p>;
        return (
            <div>
                <h1 id="tableLabel" > New Game </h1>
                
                {contents}
            </div>
        );
    }
}