import React from 'react';

export default class Maincontent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section id="main-content">

                <img src="bigImg.url" alt="#" id='mainImg' />
                <h3 id="title">bigImg.title</h3>
                <h4 id="dateLoc">Taken on bigImg.location in bigImg.date | date:'d MMMM yyyy'</h4>

                <fieldset>
                    <legend> Filter: </legend>
                    Location: <input type="text" />
                    Title: <input type="text" />


                    <a href="" onClick="javascript:void()">date</a>

                </fieldset>
                <hr/>
                
            </section>
         
        )
    }
}