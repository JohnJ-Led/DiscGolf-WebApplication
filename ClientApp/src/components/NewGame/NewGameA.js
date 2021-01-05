import React, { Component } from 'react';

export class NewGameA extends Component {

    static displayname = NewGameA.name;

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
                    scores: [{
                        sid: '',
                        score: ''
                    }]
                }]
            },
            newGame: false
        };
        this.isNewGame = this.isNewGame.bind(this);
        this.handleOnChangeGame = this.handleOnChangeGame.bind(this);
        this.handleOnChangeHole = this.handleOnChangeHole.bind(this);
        this.onSaveGame = this.onSaveGame.bind(this);
        this.populateGameHead = this.populateGameHead.bind(this);
        this.populatePlayer = this.populatePlayer.bind(this);
        this.addNewPlayer = this.addNewPlayer.bind(this);
    }

    isNewGame() {
        //Initital state setup
        this.setState({ newGame: true });
        let { game } = this.state;
        let tempArry = [];
        let score = [];
        for (let i = 1; i <= 18; i++) {
            let holeObj = { holeNbr: i, distance: '', par: '' };
            let scoreObj = { sid: i, score: '' };
            tempArry.push(holeObj);
            score.push(scoreObj);
        }
        game["hole"] = tempArry;
        game["player"] = [{ pid: 1, pname: '', scores: score }];
        this.setState({ game });
        console.log(tempArry);

    }

    addNewPlayer() {
        let { game } = this.state;
        let score = [];
        for (let i = 1; i <= 18; i++) {
            let scoreObj = { sid: i, score: '' };
            score.push(scoreObj);
        }

        let addPlayer = [...game.player];
        addPlayer.push({ pid: addPlayer.length + 1, pname: '', scores: score });
        game["player"] = addPlayer;

        this.setState({ game });
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

    handleOnChangeHole(id, e) {
        //Use to update Array state objects
        let { game } = this.state;
        let subObj;
        console.log(id);
        console.log(e.target);
        if(e.target.name === 'distance' || e.target.name === 'par') {
            subObj = "hole";
        }
        else if (e.target.name === 'pname') {
            subObj = "player";
        }
        let update = [...game[subObj]];
        update[id - 1][e.target.name] = e.target.value;
        game[subObj] = update;
        this.setState({ game });
    }

    handleOnChangeScore = (players, id, e) => {
        let { game } = this.state;
        let updatePlayer = game.player;
        let key = players.pid - 1;
        let updateScore = updatePlayer[key]["scores"];
        updateScore[id][e.target.name] = e.target.value;
        updatePlayer[key]["scores"] = updateScore;
        game["player"] = updatePlayer;

        this.setState({ game });
    }

    populateGameHead() {

        let hole = this.state.game.hole;
        return (
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
                        <td key={hole.holeNbr}><input type="text" name="par" className="new-game-edit" onChange={(e) => this.handleOnChangeHole(hole.holeNbr, e)} />
                        </td>
                    )}
                    </tr>
                
            </thead>            
        );
    }

    populatePlayer() {
        let player = this.state.game.player;
        return (
            <tbody>
                <tr>
                    <th colSpan="18" scope="colgroup"> Player: </th>
                    <th ><button className="btn btn-primary" onClick={this.addNewPlayer}>Add</button></th>

                </tr>
                    {player.map((player, index) => 
                            <tr key={index}>
                            <th><input type="text" name="pname" className="new-game-edit" onChange={(e) => this.handleOnChangeHole(player.pid, e)} /></th>
                            {player.scores.map((score, index) => <td key={index} ><input type="text" name="score" className="new-game-edit" onChange={(e) => this.handleOnChangeScore(player, index, e)}/> </td>)}
                            </tr>
                    )}
            </tbody>
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
                            onChange={this.handleOnChangeGame} />
                    </label>
                    
                </form>
                <table className='table table-bordered' aria-labelledby="tabelLabel">
                    {this.populateGameHead()}
                    {this.populatePlayer()}
                </table>
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