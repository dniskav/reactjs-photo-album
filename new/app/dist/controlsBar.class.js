import React from 'react';

export default class ControlsBar extends React.Component {
    constructor() {
        super();
    }
    changeImage () {
        alert('change')
    }
    render() {
        return (
            <section id="top-nav">
                <button class="left" onClick='changeImage("<")'><img src='img/assets/btn-left.png'/>></button>
                <h2 id='albumTitle'>album.album.name</h2>
                <button class="right" onClick='changeImage(">")'><img src='img/assets/btn-right.png'/>></button>
            </section>            
        )
    }
}