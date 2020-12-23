import React, { Component } from 'react';

export class NewGame extends Component {

    static displayname = NewGame.name;

    constructor(props) {
        super(props);
        this.state = {
                gameID: 'Game',
                location: 'Place',
                hole: [{
                    holeNbr: '',
                    distance: '',
                    par: '',
                }],
                player: [{
                    pname: '',
                    score: ['']
            }],
            newGame: false
        };
        this.isNewGame = this.isNewGame.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSaveGame = this.onSaveGame.bind(this);
    }

    isNewGame() {
        this.setState({ newGame: true });
        //this.setState({ holeNbr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']});
        //console.log( this.state.holeNbr );
        console.log("I got here");
    }

    onSaveGame() {
         alert("You're Game has been save!");
    }

    handleOnChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    static populateNewGame() {
        console.log("DO SOMETHING!!!!");
        return (
            <div>
                <form>
                    <label>
                        Game Name:
                        <input
                            name="gameID"
                            type="text"
                            value={this.state.gameID}
                            onChange={this.handleOnChange} />
                    </label>
                    <label>
                        Location:
                        <input
                            name="location"
                            type="text"
                            value={this.state.location}
                            onChange={this.handleOnChange} />
                    </label>
                </form>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <td> Hole:</td>
                            <th scope="col"> 1 </th>
                            <th scope="col"> 2 </th>
                            <th scope="col"> 3 </th>
                            <th scope="col"> 4 </th>
                            <th scope="col"> 5 </th>
                            <th scope="col"> 6 </th>
                            <th scope="col"> 7 </th>
                            <th scope="col"> 8 </th>
                            <th scope="col"> 9 </th>
                            <th scope="col"> Front </th>
                            <th scope="col"> 10 </th>
                            <th scope="col"> 11 </th>
                            <th scope="col"> 12 </th>
                            <th scope="col"> 13 </th>
                            <th scope="col"> 14 </th>
                            <th scope="col"> 15 </th>
                            <th scope="col"> 16 </th>
                            <th scope="col"> 17 </th>
                            <th scope="col"> 18 </th>
                            <th scope="col"> Total </th>
                        </tr>
                    </thead>
                    <tbody className="table-bordered">
                        <tr>
                            <td>Distance</td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                            <td><input type="text" className="new-game-edit" /></td>
                        </tr>
                        <tr>
                            <td> Par</td>
                            <td> 1 </td>
                            <td> 2 </td>
                            <td> 3 </td>
                            <td> 4 </td>
                            <td> 5 </td>
                            <td> 6 </td>
                            <td> 7 </td>
                            <td> 8 </td>
                            <td> 9 </td>
                            <td> 123 </td>
                            <td> 10 </td>
                            <td> 11 </td>
                            <td> 12 </td>
                            <td> 13 </td>
                            <td> 14 </td>
                            <td> 15 </td>
                            <td> 16 </td>
                            <td> 17 </td>
                            <td> 18 </td>
                            <td> 321 </td>
                        </tr>

                    </tbody>
                </table>
               <br />
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <tbody>
                        <tr>
                            <th colSpan="20" scope="colgroup"> Player: </th>
                            <th ><button className="btn btn-primary" onClick={this.handleOnChange} >Add</button></th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td> ReadyPlayer1</td>
                            <th scope="col"> 1 </th>
                            <th scope="col"> 2 </th>
                            <th scope="col"> 3 </th>
                            <th scope="col"> 4 </th>
                            <th scope="col"> 5 </th>
                            <th scope="col"> 6 </th>
                            <th scope="col"> 7 </th>
                            <th scope="col"> 8 </th>
                            <th scope="col"> 9 </th>
                            <th scope="col"> 123 </th>
                            <th scope="col"> 10 </th>
                            <th scope="col"> 11 </th>
                            <th scope="col"> 12 </th>
                            <th scope="col"> 13 </th>
                            <th scope="col"> 14 </th>
                            <th scope="col"> 15 </th>
                            <th scope="col"> 16 </th>
                            <th scope="col"> 17 </th>
                            <th scope="col"> 18 </th>
                            <th scope="col"> 321 </th>
                        </tr>
                    </tbody>
                </table>

                <br/>
                <button className="btn btn-primary" onClick={this.onSaveGame}>Save Game</button>
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