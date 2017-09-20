import React from 'react';

export default class Thumb extends React.Component {
    constructor(){
        super();
    }
    changeImage(){
        alert(8);
    }
    render(){
        let image = this.props.image;
        let that = this;
        
        return(
            <li class="thumb" onClick={() => that.props.click(that.props.ndx)}>
                <img src={image.thumb_url} alt="" title=""/>
            </li>
        )
    }
}