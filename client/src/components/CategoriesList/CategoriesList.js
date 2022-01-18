// Categories List
// called from ViewCategories.js

//Import node components
import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import CategoriesItem from './_CategoriesItem';
import CategoriesForm from './_CategoriesForm';
import Modal from "../Modal/Modal";

// Import Utils
import {shapeNestedArray} from "../../utils/ArrayUtils/ArrayUtils";

// Import SCSS
import "../CategoriesList/CategoriesList.scss";

export default function CategoriesList( {categories, selectedCategory} ) {

    const revealModal = () => {
        
    }
    
    let shapedCategories = shapeNestedArray( categories, 'parentId' ); //console.log( 'shaped', shapedCategories );

    return (
        <div className="categories__list--wrapper list__wrapper">
            <Modal>
                <CategoriesForm selectedCategory={selectedCategory} categories={shapedCategories} />
            </Modal>

            
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
                        <li>
                            <button className="btn btn__add" onClick={revealModal}>Add a New Category</button> 
                        </li>
                    </ul>  
                         
                )})}
        </div>
    );
}