import React from 'react';
import ReactDOM from 'react-dom';
import ControlsBar from './controlsBar.class';
import Maincontent from './mainContent.class';
import Thumbs from './thumbs.class';

class Layout extends React.Component {
    constructor(){
        super();
        this.grettings = 'Hello future!' 
    }
    getData(){
        return this.grettings;
    }
    render() {
        return (
            <div>
                <ControlsBar />
                <Maincontent />
                <Thumbs />
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);