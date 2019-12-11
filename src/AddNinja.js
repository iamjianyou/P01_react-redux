import React, { Component } from 'react'

class AddNinja extends Component {

    state = {
        name:null,
        age:null,
        belt:null
    }

    /* handle change *****************/
    handleChange = (e) => {
        // update state according to user input
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    /* handle submit *****************/
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }

     /* render *****************/
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" onChange = {this.handleChange} />

                    <label htmlFor='name'>Age: </label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor='name'>Belt: </label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>  
                </form>
            </div>
        )
        
    }
}

export default AddNinja;