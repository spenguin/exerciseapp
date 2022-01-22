// Search component
// called in ViewExercises.js

// import node component
import React, {Component} from "react"

// import SCSS
import "./Search.scss";


export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchResult: null,
            displayMessage: false,
            list: this.props.list
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange = (e) => {
        console.log( 'string', e.target.value );
        if( e.target.value.length > 2 )
        {
            // Begin the search
        }
    }

    submit = (e) => {

    }


    render() {


        return (
            <div className="search">
                <form className="search__form form " onSubmit={this.submit}>
                    <input type="text" className="input input__search" onChange={this.handleInputChange} placeholder="Search for Exercise" />
                    <button className="btn btn__search--tiny"></button>
                </form>
                <div className="search__result"></div>
            </div>
        )
    }
}