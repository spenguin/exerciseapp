// component Exercises Item
// Called from ExercisesList.js


import React from 'react';
import { Link } from 'react-router-dom';

//SCSS
import Edit from "../../assets/icons/edit-alt.svg";


export default function ExercisesItem( exercise ) { 
    return (
        <li className="exercises__list--item list__item">
            {exercise.name}<Link to={ `/exercises/${exercise.id}` }><img src={Edit} alt="Edit" /></Link>
        </li>
    );
}