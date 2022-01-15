// Categories List
// called from ViewCategories.js

//Import node components
import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import CategoriesItem from './_CategoriesItem';
import CategoriesForm from './_CategoriesForm';

// Import SCSS
import "../CategoriesList/CategoriesList.scss";

export default function CategoriesList( {categories, selectedCategory} ) {
    return (
        <div className="categories__list--wrapper list__wrapper">
            <CategoriesForm selectedCategory={selectedCategory} categories={categories} />
            <ul className="categories__list list">
                {categories.map(category => {
                    return (
                        <CategoriesItem 
                            key={category.id}
                            id={category.id}
                            name={category.name}
                        />
                        
                    )
                })}
                <li className="categories__list--item list__item">
                    <Link to={ `/categories` }>Add a New Category</Link>
                </li>
            </ul>
        </div>
    );
}
