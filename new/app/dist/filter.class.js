import React from 'react';

export default class Filter extends React.Component {
    constructor() {
        super();
    }
    filterBy(e, kind) {
        let value = e.target.value;
        this.props.filter({value : value, kind : kind});
    }
    render() {
        this.ndx = this.props.ndx;
        return (
            <fieldset>
                <legend> Filter: </legend>
                Location: <input type="text" onChange={(e) => this.filterBy(e, 'Location')}/>
                Title: <input type="text" onChange={(e) => this.filterBy(e, 'Title')}/>
            </fieldset>           
        )
    }
}