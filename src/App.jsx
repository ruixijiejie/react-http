import React, { Component } from "react";
import Students from './components/Students'
import * as ReactDOM from "react-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Students />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
