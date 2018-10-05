import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: '',
            Phone: ''
        };
    }

    handleChange = (event) => {
      const { name, value } = event.target;
        this.setState({ [name] : value})
    }

    FormSubmit = () => {
        this.props.submitQuery(this.state);
        this.setState( this.state );
        this.setState({ name:'', job: '', phone:'' })
    }



    render() {
        return (
            <div>
                <form class="inline">
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
                    <label>Phone Number</label>
                    <input type="text"
                           name="phone"
                           value={this.state.phone}
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