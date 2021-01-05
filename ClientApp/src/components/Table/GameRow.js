import React, { Component } from 'react';
import { Cell } from './GameCell';

/** 
 * GetRow components creates a single table row. 
 * Props: editName(for editable header), rowName, edit(for editable maped cells), row (array of objects), and onRowChange(event handler)
 * */

export class GetRow extends Component {
        constructor(props) {
            super(props);
            this.handleOnChange = this.handleOnChange.bind(this);
        }
        //Passes up row name, key(index value or undefined if no index), value to update
        handleOnChange(key, updateValue) {
            this.props.onRowChange(this.props.rowName, key, updateValue);
        }
        //Creates a header or input cell for header column and maps array of objects passed to it into cells of either input or readonly
        render() {
            const rowName = this.props.rowName;
            return (
                <tr>
                    <Cell edit={this.props.editName} header='y' value={rowName} onCellChange={this.handleOnChange} />
                    {this.props.row.map((row) =>
                        <Cell key={row.cellId} thisIndex={row.cellId} edit={this.props.edit} value={row.value} onCellChange={this.handleOnChange} />)}
                </tr>
            );
        }

    }