// View Categories page
// Called from app.js

//Import node components
import React, {Component} from 'react';
import axios from 'axios';

// SCSS
import "../ViewCategories/ViewCategories.scss";

class ViewCategories extends Component {
    state = {
        categoryList: []
    }

    componentDidMount() {
        // Fetch list of Categories from server
        axios
            .get( '/categories' )
            .then( response => {
                this.setState({
                    categoryList: response.data
                });
            })
            .catch( err => console.log( err ) );

    }

    render() {

        if( !this.state.categoryList )
        {
            return ( <p>... Loading Categories ...</p> );
        }
        else
        {
            <section className="categories site-main">
                <div className="categories-wrapper max-wrapper">

                </div>
            </section>            
        }

    }


}

export default ViewCategories;