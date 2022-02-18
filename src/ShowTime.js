import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class ShowTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() }
    }
    render() {
        return (
            <div>
                <hi> Welcome Iniyan</hi>
                <h2>Time is {this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }

}

export default ShowTime;