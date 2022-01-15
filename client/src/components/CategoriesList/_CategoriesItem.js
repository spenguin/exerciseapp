// Categories Item component
// called from CategoriesList.js

import React from 'react';
import { Link } from 'react-router-dom';

//SCSS
import Edit from "../../assets/icons/edit-alt.svg";


export default function CategoriesItem( category ) {
    return (
        <li className="categories__list--item list__item">
            {category.name}<Link to={ `/categories/${category.id}` }><img src={Edit} alt="Edit" /></Link>
        </li>
    );
}