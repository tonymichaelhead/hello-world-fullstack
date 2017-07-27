import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: 'clicked off'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        //this.state.clicked ==='clicked off' ? this.setState({clicked: 'CLICKED!!!'}) : this.setState({clicked: 'clicked off'})
        const context = this;
        axios.get('http://localhost:3000/')
        .then(function(response) {
            console.log('This is the logged response in the client: ', response);
            context.setState({ clicked: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me!</button>
                <p>{this.state.clicked}</p>
            </div>
        )
    }
}

export default Button;