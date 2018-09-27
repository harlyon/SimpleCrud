import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" value={name} />
                    <label>Job</label>
                    <input type="text" name="job" value={job} />
                    <input type="button" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;