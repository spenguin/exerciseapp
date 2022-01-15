// View Categories page
// Called from app.js

//Import node components
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Import Components
import CategoriesList from '../../components/CategoriesList/CategoriesList';

// SCSS
import "../ViewCategories/ViewCategories.scss";

class ViewCategories extends Component {
    state = {
        categoryList: []
    }

    componentDidMount() {
        // Fetch list of Categories from server
        axios
            .get( 'http://localhost:8080/categories' )
            .then( response => {
                this.setState({
                    categoryList: response.data
                });
            })
            .catch( err => console.log( err ) );
    }

    componentDidUpdate(prevProps) { 

    }

    render() {

        if( !this.state.categoryList )
        {
            return ( <p>... Loading Categories ...</p> );
        }
        else
        {
            const selectedCategory = this.props.match.params.categoryId ? this.state.categoryList[this.props.match.params.categoryId-1] : null; 
            console.log( 'selectedCategory', selectedCategory);
            
            return (
                <section className="categories site-main">
                    <div className="categories-wrapper max-wrapper">
                        <Link to="/" className="site-main__link">Home</Link>
                        <CategoriesList categories={this.state.categoryList} selectedCategory={selectedCategory} />
                    </div>
                </section>
            );            
        }

    }


}

export default ViewCategories;