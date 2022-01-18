// Modal component
// called from various

//Import node components
import React, {Component} from 'react';

// Import SCSS
import "./Modal.scss";


export default class Modal extends Component {
    render(){
        return (
            <div className="modal">
                {this.props.children}
            </div>
        );
    };
}