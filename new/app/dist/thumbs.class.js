import React from 'react';

export default class Thumbs extends React.Component {
    constructor() {
        super();
    }

    render() {
        let thumbs = [];
        let that = this;
        
        return (
            <section id="thumbs">
                <ul class="thumbnails">
                    {this.props.images.map((image, ndx) => 
                        <li key={ndx} class="thumb" onClick={() => that.props.jumpToImage(ndx)}>
                            <img src={image.thumb_url}/> 
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}