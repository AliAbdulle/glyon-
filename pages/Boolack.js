//import all dependences
import React from 'react';
import '/index.css';

class Boolack extends React.Component {
    // constructor 
    constructor() {
        super(this.props);
        this.state = {
            name: 'Ali',
            date : ''
        }
    }
    render(){
        return (
            <div>
                <p> Hello</p>
            </div>
        )
    }
}