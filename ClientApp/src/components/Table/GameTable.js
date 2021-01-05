import React, { Component } from 'react';
import { GetRow } from './GameRow';
import { Cell } from './GameCell';


export class GameTable extends Component {
    constructor(props) {
        super(props);
        //Use newGame as passable prop for edit status?
        this.handleOnChangeGame = this.handleOnChangeGame.bind(this);
        this.handleHoleChange = this.handleHoleChange.bind(this);
        this.handlePlayerChange = this.handlePlayerChange.bind(this);
        this.populateTableHead = this.populateTableHead.bind(this);
        this.populateTableBody = this.populateTableBody.bind(this);
        this.addNewPlayer = this.addNewPlayer.bind(this);
        this.onSaveGame = this.onSaveGame.bind(this);
        this.state = { game: { }, newGame: false , loading: true};
    }

    componentDidMount() {
        this.getGameData();
    }

    componentDidUpdate(prevProps, prevState) {
      /*  console.log("I ran");
        console.log(prevProps);
        console.log(this.props.game);
        console.log("*****");
     /** IF prevProps !== currProps
     * Send currProps back through an onChange style function.
     * Else NULL*/
    }
    onSaveGame() {
        console.log('The State');
        console.log(this.state.game);
        console.log('The Props');
        console.log(this.props.game);
    }
    handleOnChangeGame(key, updateValue) {
        //Use to update None Array state objects
       let { game } = this.state;
       game[key] = updateValue;
       this.setState({
            game
        });
    }

    handleHoleChange(rowName, index, value) {
        let { game } = this.state;
        let update = [...game.hole];
        update[index][rowName.toLowerCase()] = value;
        //console.log(update);
        game.hole = update;
        this.setState({ game });
        //console.log(this.state);
    }

    handlePlayerChange(rowName, index, value) {

        let { game } = this.state;
        let update = [...game.player];
        if (typeof index === 'undefined') {
            update[rowName - 1]['pname'] = value;
            game.player = update;
            this.setState({ game });
        }
        else {
            let playerUpdate = [...update[rowName - 1]['scores']];
            playerUpdate[index]['score'] = value;
            update[rowName - 1]['scores'] = playerUpdate;
            game.player = update;
            this.setState({ game });
        }
    }

    //Lift state on this function
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


    populateTableHead() {

        return (
            <thead>
                <GetRow editName={false} edit={false} rowName="Hole" row={this.state.game.hole.map(hole => {
                    return {
                        cellId: hole.holeNbr - 1,
                        value: hole.holeNbr
                    }
                })
                } />
                <GetRow editName={false} edit={this.state.newGame} rowName="Distance" row={this.state.game.hole.map(hole => {
                    return {
                        cellId: hole.holeNbr - 1,
                        value: hole.distance
                    }
                })
                }
                    onRowChange={this.handleHoleChange} />
                <GetRow editName={false} edit={this.state.newGame} rowName="Par" row={this.state.game.hole.map(hole => {
                    return {
                        cellId: hole.holeNbr - 1,
                        value: hole.par
                    }
                })
                }
                    onRowChange={this.handleHoleChange} />
            </thead>
            );
    }

    //Map through player object. Decide on add button location. Should pass button as a props that calls the add player function? 
    //
    populateTableBody() {
        let player = this.state.game.player;
        let playerHead = this.state.newGame ? <tr><th colSpan="18" scope="colgroup"> Player: </th>
                    <th ><button className="btn btn-primary" onClick={this.addNewPlayer}>Add</button></th></tr> : <tr><th colSpan="19" scope="colgroup"> Player: </th></tr>;
        
        return (
            <tbody>
                    {playerHead}
                {player.map(player =>
                    <GetRow key={player.pid} editName={this.state.newGame} edit={this.state.newGame} rowName={player.pid } row={player.scores.map(scores => {
                        return {
                            cellId: scores.sid - 1,
                            value: scores.score
                        }
                    })
                    }
                        onRowChange = {this.handlePlayerChange}/>
                )}

            </tbody>
            );
    }

    populateGame() {
        return (
            <div>
                <table>
                <thead>
                    <tr>
                            <Cell edit={false} header='y' value="Game Name:" onCellChange={this.handleOnChangeGame} />
                            <Cell edit={this.state.newGame} thisIndex="gameID" value={this.state.game.gameID} onCellChange={this.handleOnChangeGame} />
                            <Cell edit={false} header='y' value="Location" onCellChange={this.handleOnChangeGame} />
                            <Cell edit={this.state.newGame} thisIndex="location" value={this.state.game.location} onCellChange={this.handleOnChangeGame} />
                    </tr>
                    </thead>
                </table>
                <table className='table table-bordered' aria-labelledby="tabelLabel">
                    {this.populateTableHead()}
                    {this.populateTableBody()}
                </table>
                <button className="btn btn-primary" onClick={this.onSaveGame}>Save Game</button>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.populateGame();
        return (
            <div>
                {contents}
            </div>

            );
    }

    async getGameData() {
        this.setState({ game: this.props.game, newGame: this.props.newGame, loading: false });
    }
}
