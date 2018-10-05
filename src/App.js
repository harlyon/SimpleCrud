import React, { Component } from 'react';
import './App.css';
import Table from './component/Table';
import Form from './component/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }



   removeItems = index => {
     const { items } = this.state;

     this.setState({ items: items.filter((item,i) => {
       return i !== index;
     })

     });
   }

   submitQuery = item => {
     this.setState({ items: [...this.state.items, item] });
   }

  render() {
    return (
      <div className="container text-center">
        <h1>Update the Table</h1>
        <p>Add the Relevant Input</p>
        <h3>Add New Record</h3>
            <Form submitQuery={this.submitQuery} />
        <Table
               itemData={this.state.items}
               removeItems={this.removeItems}
        />
      </div>
    );
  }
}

export default App;
