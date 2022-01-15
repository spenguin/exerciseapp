// Categories Form
// called from CategoriesList.js

//Import node components
import React from 'react';
import { Link } from 'react-router-dom';

//Import helper functions
// import {renderOptions} from "../../utils/FormUtils/FormUtils"; FIX - might not be needed


export default function CategoriesForm( {selectedCategory, categories} ) {
    const label = selectedCategory ? 'Amend Category' : 'New Category';
    const placeholder = selectedCategory ? '' : "New Category Name";
    const catValue = selectedCategory ? selectedCategory.name : '';
    const cancelLink = selectedCategory ? <Link to={ `/categories` }>Cancel</Link> : ''
    const subText = selectedCategory ? 'Amend' : 'Submit';
    // const options = renderOptions( categories, 'id', 'name' ); //console.log( 'options', options );

    return (
        <form className="categories__list--form">
            <label for="name">{label}<input type="text" name="name" placeholder={placeholder} value={catValue} /></label>
            <label>Category</label>
                { categories.map( ( category ) => 
                    <label>{category.name}
                        <input type="radio" name="categoryId" value={category.id} />
                    </label>
                )}
            <button className="btn btn__submit">{subText}</button>
            {cancelLink}
        </form>
    )
}