// Categories List
// called from ViewCategories.js

//Import node components
import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import CategoriesItem from './_CategoriesItem';
import CategoriesForm from './_CategoriesForm';

// Import Utils
import {shapeNestedArray} from "../../utils/ArrayUtils/ArrayUtils";

// Import SCSS
import "../CategoriesList/CategoriesList.scss";

export default function CategoriesList( {categories, selectedCategory} ) {
    
    let shapedCategories = shapeNestedArray( categories, 'parentId' ); 

    return (
        <div className="categories__list--wrapper list__wrapper">
            <CategoriesForm selectedCategory={selectedCategory} categories={categories} />
            
                {shapedCategories.map(groupedCategory => {
                    return (
                        <ul className="categories__list list">                        
                            <li><CategoriesItem
                                    key={groupedCategory.id}
                                    id={groupedCategory.id}
                                    name={groupedCategory.name}
                                />
                            </li>
                            <li>
                                <ul>
                                    {groupedCategory.children.map(category => {
                                        return( 
                                            <CategoriesItem 
                                                key={category.id}
                                                id={category.id}
                                                name={category.name}
                                            />
                                        )})}
                                </ul>
                            </li>
                            <li className="categories__list--item list__item">
                                <Link to={ `/categories` }>Add a New Category</Link>
                            </li>
                        </ul>                            
                        )})}

        </div>
    );
}
