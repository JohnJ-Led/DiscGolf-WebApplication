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
                score:['']
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
                    <tbody>
                    <tr>
                        <th scope="row"> Distance</th>
                    </tr>
                    <tr>
                        <th scope="row"> Par</th>
                        </tr>
                    </tbody>
                </table>

                <br />
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <tbody>
                        <tr>
                            <th scrope="row"> Player: </th>
                        </tr>
                        <tr>
                            <th scope="row"> SomeName </th>
                        </tr>
                    </tbody>
                </table>

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