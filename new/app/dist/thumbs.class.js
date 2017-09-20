import React from 'react';
import Thumb from './thumb.class.js';

export default class Thumbs extends React.Component {
    constructor() {
        super();
    }

    render() {
        let thumbs = [];
        let that = this;
        this.props.images.forEach(function(element, i) {
            thumbs.push(<Thumb image={element} key={i} ndx ={i} click={that.props.jumpToImage} />);
        })
        return (
            <section id="thumbs">
                <ul class="thumbnails">
                    {thumbs}
                </ul>
            </section>
        )
    }
}