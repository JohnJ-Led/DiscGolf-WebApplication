import React, { Component } from 'react';


/**
 * Cell component makes up re-useable cells for the game table.
 * Props to pass: edit, value, header, onCellChange(onChange handler)
 * */

export class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    //Pass cell value up and index(undefined if no index)
    handleOnChange(e) {
        this.props.onCellChange(this.props.thisIndex, e.target.value);
    }
    //Returns 1 of 3 cell types input cell, header cell, readonly cell
    cell() {
        let cellType = this.props.edit ? <td><input type='text' className="new-game-edit" placeholder={this.props.value} onChange={this.handleOnChange} /></td> : this.props.header === 'y' ? <th className="new-game-edit">{this.props.value}</th> : <td className="new-game-edit">{this.props.value}</td>;
        return cellType;
    }

    render() {
        return (
            this.cell()
        );
    }
}