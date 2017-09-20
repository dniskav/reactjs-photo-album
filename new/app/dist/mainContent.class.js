import React from 'react';

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
                <h4 id="dateLoc">Taken on {currentImage.location} in {currentImage.date}</h4>

                <fieldset>
                    <legend> Filter: </legend>
                    Location: <input type="text" />
                    Title: <input type="text" />
                    <a href="#">date</a>

                </fieldset>
                <hr/>
                
            </section>
         
        )
    }
}