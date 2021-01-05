import React, { Component } from 'react';

export class PlayerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: false };
        this.addNewPlayer = this.addNewPlayer.bind(this);
    }

    handleOnChangeHole = (id, e) => {
        //Use to update Array state objects
        let { player } = this.props;
        let subObj;
        let update = [...player];
        update[id - 1][e.target.name] = e.target.value;
        player = update;
        this.setState({ player });
    }

    handleOnChangeScore = (players, id, e) => {
        let { player } = this.props;
        let updatePlayer = player;
        let key = players.pid - 1;
        let updateScore = updatePlayer[key]["scores"];
        updateScore[id][e.target.name] = e.target.value;
        updatePlayer[key]["scores"] = updateScore;
        player = updatePlayer;

        this.setState({ player });
    }

    addNewPlayer() {
        let { player } = this.props;
        let score = [];
        for (let i = 1; i <= 18; i++) {
            let scoreObj = { sid: i, score: '' };
            score.push(scoreObj);
        }

        let addPlayer = [...player];
        addPlayer.push({ pid: addPlayer.length + 1, pname: '', scores: score });
        player = addPlayer;

        this.setState({ player });
    }

    render() {
        let player = this.props.player;
        return (
            <tbody>
                <tr>
                    <th colSpan="18" scope="colgroup"> Player: </th>
                    <th ><button className="btn btn-primary" onClick={this.addNewPlayer}>Add</button></th>

                </tr>
                {player.map((player, index) =>
                    <tr key={index}>
                        <th><input type="text" name="pname" className="new-game-edit" onChange={(e) => this.handleOnChangeHole(player.pid, e)} /></th>
                        {player.scores.map((score, index) => <td key={index} ><input type="text" name="score" className="new-game-edit" onChange={(e) => this.handleOnChangeScore(player, index, e)} /> </td>)}
                    </tr>
                )}
            </tbody>
        );
    }




}

class GetRowB extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index, e) {
        this.props.onChange(index, e);
    }
    render() {
        const row = this.props.row;
        const rowName = this.props.name;
        console.log(rowName);
        return (
            row.map((_row, index) =>
                <td key={index}><input type="text" name={rowName} className="new-game-edit" onChange={(e) => this.handleChange(index, e)} />
                </td>
            )
        );
    }
}