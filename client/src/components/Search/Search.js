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
            list: [],
            target: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {

        if( e.target.value.length > 2 )
        {   
            this.setState({
                target: e.target
            });
            const filteredList = this.filterItems( this.props.list, e.target.value ); //console.log( 'filtered list', filteredList)
            this.setState({
                list: filteredList
            });
        }
    }

    /**
     * Filter array items based on search criteria (query)
     */
    filterItems = (arr, query) => {
        return arr.filter(function(el) {
            return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
    }

    selectHandler = ( id ) => (e ) => {
        // console.log( 'id', id ); 
        // console.log( 'text', e.target.textContent );
        // const selected = e.target.textContent;
        const target = this.state.target;
        target.value = e.target.textContent
        this.setState({
            target: target
        })
        this.setState({
            list: [],
            target: null
        })
    }

    render() {

            return (
                <div className="search">
                    <form className="search__form form " onSubmit={this.props.submit}>
                        <input type="text" className="input input__search" onChange={this.handleInputChange} placeholder="Search for Exercise" />
                        <button className="btn btn__search--tiny"></button>
                    </form>
                    <div className="search__result">
                        {
                            this.state.list.map( item => {
                                return (
                                    <li key={item.id} className="search__result--item" onClick={ this.selectHandler(item.id) }>{item.name}</li>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
}