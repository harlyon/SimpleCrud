import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: ''
        };
    }

    handleChange = (event) => {
      const { name, value } = event.target;
        this.setState({ [name] : value})
    }

    FormSubmit = () => {
        this.props.submitQuery(this.state);
        this.setState( this.state );
    }



    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text"
                           name="name"
                           value={this.state.name}
                           onChange={this.handleChange}
                           />
                    <label>Job</label>
                    <input type="text"
                           name="job"
                           value={this.state.job}
                           onChange={this.handleChange}
                           />
                    <input type="button"
                           value="Submit" onClick={this.FormSubmit} />
                </form>
            </div>
        );
    }
}

export default Form;