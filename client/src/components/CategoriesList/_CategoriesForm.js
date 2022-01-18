// Categories Form
// called from CategoriesList.js

//Import node components
import React from 'react';
import { Link } from 'react-router-dom';


export default function CategoriesForm( {selectedCategory, categories} ) { //console.log( 'categories', categories[0] );
    const label = selectedCategory ? 'Amend Category' : 'New Category';
    const placeholder = selectedCategory ? '' : "New Category Name";
    const catValue = selectedCategory ? selectedCategory.name : '';
    const cancelLink = selectedCategory ? <Link to={ `/categories` }>Cancel</Link> : ''
    const subText = selectedCategory ? 'Amend' : 'Submit';
    const categoryObj = categories[Object.keys(categories)[0]]; 

    if( !categoryObj )
    {
        return ( <p>... Loading Form ...</p> );
    }
    else {
        return (
            <form className="categories__list--form form">
                <h2 className="form__heading">Add a New Category</h2>
                <label className="form__input-label">{label}</label>
                <input type="text" name="name" placeholder={placeholder} value={catValue} />
                <label className="form__input-label">Select the Category</label>

                { categoryObj.children.map( ( category ) => 
                    <div className="form__radio-wrapper">
                        <label className="form__radio-label">{category.name}</label>
                        <input type="radio" name="categoryId" value={category.id} />
                    </div>
                )}

                <button className="btn btn__submit">{subText}</button>
                {cancelLink}
            </form>
        )
    }
}