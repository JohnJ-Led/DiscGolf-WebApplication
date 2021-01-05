import React, { Component } from 'react';
import { GameTable } from '../Table/GameTable';

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
                    scores: [{
                        sid: '',
                        score: ''
                    }]
                }]
            },
            newGame: false
        };
        this.isNewGame = this.isNewGame.bind(this);
        this.onSaveGame = this.onSaveGame.bind(this);
    }

    onSaveGame() {
        console.log('The State');
        console.log(this.state.game);
        console.log('The Props');
        console.log(this.props.game);
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
    componentDidUpdate(prevProps, prevState) {
        console.log('*****');
        console.log(this.state.game);
        console.log('*****');
    }

    render() {
        let contents = this.state.newGame
            ? <GameTable game={this.state.game} newGame={this.state.newGame} />
            : <p>Add new game here...<br/><button className="btn btn-primary" onClick={this.isNewGame}>New Game</button></p>;
        return (
            <div>
                <h1 id="tableLabel" > New Game </h1>
                
                {contents}
                <button className="btn btn-primary" onClick={this.onSaveGame}>Save Game</button>
            </div>
        );
    }
}