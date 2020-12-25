import React, { Component } from 'react';

export class NewGame extends Component {

    static displayname = NewGame.name;

    constructor(props) {
        super(props);
        this.state = {
            game:
            {
                gameID: '',
                location: '',
                hole: [{
                    holeNbr: '',
                    distance: '',
                    par: '',
                }],
                player: [{
                    pid: '',
                    pname: '',
                    score: []
                }]
            },
            newGame: false
        };
        this.isNewGame = this.isNewGame.bind(this);
        this.handleOnChangeGame = this.handleOnChangeGame.bind(this);
        this.onSaveGame = this.onSaveGame.bind(this);
        this.populateGameHead = this.populateGameHead.bind(this);
        this.populatePlayer = this.populatePlayer.bind(this);
        this.addNewPlayer = this.addNewPlayer.bind(this);
    }

    isNewGame() {
        //Inititatly state setup
        this.setState({ newGame: true });
        let { game } = this.state;
        let tempArry = [];
        let scores = [];
        for (let i = 1; i <= 18; i++) {
            let holeObj = { holeNbr: i, distance: '', par: '' };
            tempArry.push(holeObj);
            scores.push('');
        }
        game["hole"] = tempArry;
        game["player"] = [{ pid: 1, pname: '', score: scores }];
        this.setState({ game });
        console.log(tempArry);

    }

    onSaveGame() {
        console.log(this.state.game);
        
    }

    handleOnChangeGame(e) {
        //Use to update None Array state objects
        let { game } = this.state;
        game[e.target.name] = e.target.value;
        this.setState({
            game
        });
    }

    handleOnChangeHole = (id, e) => {
        //Use to update Array state objects
        let { game } = this.state;
        if(e.target.name === 'distance' || e.target.name === 'par') {
            let updateHole = [...game.hole];
            updateHole[id - 1][e.target.name] = e.target.value;
            game["hole"] = updateHole;
        }
        else if (e.target.name === 'pname' || e.target.name === 'score') {
            let updatePlayer = [...game.player];
            updatePlayer[id - 1][e.target.name] = e.target.value;
                game["player"] = updatePlayer;

        }
        this.setState({ game });
    }
    populateGameHead() {

        let hole = this.state.game.hole;
        return (
            <table className="table table-bordered" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Hole:</th>
                    {hole.map((hole) =>
                        <th scope="col" key={hole.holeNbr} >
                            {hole.holeNbr}
                        </th >
                    )}
                </tr>
                
                    <tr>
                        <th> Distance </th>
                    {hole.map((hole) =>
                        <td key={hole.holeNbr}><input type="text" name="distance" className="new-game-edit" onChange={(e) => this.handleOnChangeHole(hole.holeNbr, e)}/>
                            </td>
                        )}
                    </tr>
                        <tr>
                            <th> Par </th>
                    {hole.map((hole) =>
                        <td  key={hole.holeNbr}><input type="text" name="par" className="new-game-edit" onChange={(e) => this.handleOnChangeHole(hole.holeNbr, e)}/>
                            </td>
                        )}
                    </tr>
                
            </thead>
            </table>
        );
    }

    addNewPlayer() {
        let { game } = this.state;
        let scores = [];
        for (let i = 0; i < 18; i++) {
            scores.push('');
        }

        let addPlayer = [...game.player];
        addPlayer.push({ pid: addPlayer.length+1, pname: '', score: scores });
        game["player"] = addPlayer;
        
        this.setState({ game });
    }

    populatePlayer() {
        let player = this.state.game.player;
        return (
            <table className='table table-bordered' aria-labelledby="tabelLabel">
                <tbody>
                    <tr>
                        <th colSpan="20" scope="colgroup"> Player: </th>
                        <th ><button className="btn btn-primary" onClick={this.addNewPlayer}>Add</button></th>
                    </tr>
                </tbody>
                <tbody>
                    {player.map((player) => 
                            <tr key={player.pid}>
                                <th><input type="text" name="pname" className="new-game-edit" onChange={(e) => this.handleOnChangeHole(player.pid, e)} /></th>
                            </tr>
                    )}
                </tbody>
            </table>
            );
    }

    populateNewGame() {
        return (
            <div>
                <form>
                    <label>
                        Game Name:
                        <input
                            name="gameID"
                            type="text"
                            
                            onChange={this.handleOnChangeGame} />
                    </label>
                    <label>
                        Location:
                        <input
                            name="location"
                            type="text"
                            value={this.state.game.location}
                            onChange={this.handleOnChangeGame} />
                    </label>
                    
                </form>
                {this.populateGameHead()}
                {this.populatePlayer()}
                <button className="btn btn-primary" onClick={this.onSaveGame}>Save Game</button>
            </div>
        );
    }

    render() {
        let contents = this.state.newGame
            ? this.populateNewGame()
            : <p>Add new game here...<br/><button className="btn btn-primary" onClick={this.isNewGame}>New Game</button></p>;
        return (
            <div>
                <h1 id="tableLabel" > New Game </h1>
                
                {contents}
            </div>
        );
    }
}