import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    render() {
        return (

                <table>
                    <TableHeader />
                    <TableBody itemData = {this.props.itemData}
                                Delete = {this.props.removeItems}/>
                </table>

        );
    }
}

export default Table;