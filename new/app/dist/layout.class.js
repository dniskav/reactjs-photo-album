import React from 'react';
import ControlsBar from './controlsBar.class';
import Maincontent from './mainContent.class';
import Thumbs from './thumbs.class';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            currentImageNdx : 0
        };
    }
    getData(){
        return this.grettings;
    }
    changeImage (direction) {
        switch (direction) {
            case '<':
                if(this.state.currentImageNdx <= 0) {
                    return;
                }
                this.setState({currentImageNdx : this.state.currentImageNdx -= 1})
                break;
        
            case '>':
                if(this.state.currentImageNdx >= this.props.db.photos.length) {
                    return;
                }
                this.setState({currentImageNdx : this.state.currentImageNdx += 1})
                break;
        
            default:
                break;
        }
    }
    jumpToImage (ndx){
        this.setState({currentImageNdx : ndx});
    }
    render() {
        this.albumName = this.props.db.album.name;
        this.currentImage = this.props.db.photos[this.state.currentImageNdx];
        this.images = this.props.db.photos;
        return (
            <div>
                <span>current: {this.state.currentImageNdx}</span>
                <ControlsBar albumName={this.albumName} changeImage={this.changeImage.bind(this)}/>
                <Maincontent currentImage={this.currentImage} />
                <Thumbs images={this.images} jumpToImage={this.jumpToImage.bind(this)}/>
            </div>
        );
    }
}