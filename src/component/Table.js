import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    render() {

        const { itemData, removeItems } = this.props;

        return (

                <table>
                    <TableHeader />
                    <TableBody itemData = {itemData}
                               removeItems = {removeItems}/>
                </table>

        );
    }
}

export default Table;