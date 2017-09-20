import React from 'react';

export default class ControlsBar extends React.Component {
    constructor() {
        super();
    }
    render() {
        this.ndx = this.props.ndx;
        return (
            <section id="top-nav">
                <button class="left" onClick={() => this.props.changeImage('<')}><img src='img/assets/btn-left.png'/>></button>
                <h2 id='albumTitle'>{this.props.albumName}</h2>
                <button class="right" onClick={() => this.props.changeImage('>')}><img src='img/assets/btn-right.png'/>></button>
            </section>            
        )
    }
}