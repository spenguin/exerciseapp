// Categories Form
// called from CategoriesList.js

//Import node components
import React from 'react';


export default function CategoriesForm( {selectedCategory, categories, toggleModal} ) { //console.log( 'categories', categories[0] );
    const label = selectedCategory ? 'Amend Category' : 'New Category';
    const placeholder = selectedCategory ? '' : "New Category Name";
    const catValue = selectedCategory ? selectedCategory.name : '';
    const subText = selectedCategory ? 'Amend' : 'Submit';
    const categoryObj = categories[Object.keys(categories)[0]]; 
    // const parentSelected = selectedCategory ? '' : 'selected';

    if( !categoryObj )
    {
        return ( <p>... Loading Form ...</p> );
    }
    else {
        return (
            <form className="categories__list--form form">
                <h2 className="form__heading">Add a New Category</h2>
                <label className="form__input-label">{label}</label>
                <input type="text" name="name" className="input" placeholder={placeholder} value={catValue} />
                <label className="form__input-label">Select the Category</label>

                <div className="form__radio-wrapper">
                    <input type="radio" name="categoryId" value="0" parentSelected />
                    <label className="form__radio-label">Parent Category</label>
                </div>                
                { categoryObj.children.map( ( category ) => 
                    <div className="form__radio-wrapper">
                        <input type="radio" name="categoryId" value={category.id} />
                        <label className="form__radio-label">{category.name}</label>
                    </div>
                )}

                <button className="btn btn__submit">{subText}</button>
                <a onClick={toggleModal} className="modal__toggle">Cancel</a>
            </form>
        )
    }
}