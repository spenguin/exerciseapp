// Modal component
// called from various

//Import node components
import React, {Component} from 'react';

// Import SCSS
import "./Modal.scss";


export default class Modal extends Component {


    render(){
        const { isActive } = this.props;

        return (
            <div className={`modal ${isActive ? "" : "active"}`}>
                {this.props.children}
            </div>
        );
    };
}