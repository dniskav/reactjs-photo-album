import React from 'react';
import ControlsBar from './controlsBar.class';
import Maincontent from './mainContent.class';
import Thumbs from './thumbs.class';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            currentImageNdx : 0,
            filterByLocation : null,
            filterbyTitle : null,
            filteredImages : [],
            images : []
        };
    }

    getData(){
        return this.grettings;
    }

    filter(params){
        let query = {};
        let key = 'filterBy' + params.kind;
        query[key] = params.value;
        this.setState(query);
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
                if(this.state.currentImageNdx >= this.state.filteredImages.length -1) {
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
        let that = this;
        this.albumName = this.props.db.album.name;

        this.state.filteredImages = this.props.db.photos.filter(function(e){
            let byLocation = 1;
            let byTitle = 1;
            if(that.state.filterByLocation != null) {
                byLocation = e.location.indexOf(that.state.filterByLocation) > -1; 
            }            
            if(that.state.filterByTitle != null) {
                byTitle = e.title.indexOf(that.state.filterByTitle) > -1 ;
            }

            return (byLocation) && (byTitle); 
        });

        this.currentImage = this.state.filteredImages[this.state.currentImageNdx];
        
        return (
            <div>
                <ControlsBar albumName={this.albumName} changeImage={this.changeImage.bind(this)}/>
                <Maincontent currentImage={this.currentImage} filter={this.filter.bind(this)}/>
                <Thumbs images={this.state.filteredImages} jumpToImage={this.jumpToImage.bind(this)}/>
            </div>
        );
    }
}