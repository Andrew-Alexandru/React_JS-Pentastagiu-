import React, { Component } from 'react';


class Form extends Component{
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                 Location:
            <input type="text"  onChangeLocation={this.handleChangeLocation} /> 
            </label>
            <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default Form;
