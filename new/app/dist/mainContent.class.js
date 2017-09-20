import React from 'react';
import Filter from './filter.class.js';

export default class Maincontent extends React.Component {
    constructor() {
        super();
    }

    render() {
        // this.currentImage = this.props.currentImage;
        let currentImage = this.props.currentImage; 
        return (
            <section id="main-content">
                <img src={currentImage.url} alt="#" id='mainImg' />
                <h3 id="title">{currentImage.title}</h3>
                <h4 id="dateLoc">Taken on {currentImage.location} in {new Date(currentImage.date).toLocaleString()}</h4>

                <Filter filter={this.props.filter}></Filter>

                <hr/>
                
            </section>
         
        )
    }
}