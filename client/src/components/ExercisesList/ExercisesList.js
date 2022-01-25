// component ExercisesList.js
// called from ViewExercises.js

//Import node components
import React from 'react';
// import { Link } from 'react-router-dom';

// Import Components
import ExercisesItem from './_ExercisesItem';

// Import Utils
// import {shapeNestedArray} from "../../utils/ArrayUtils/ArrayUtils";

// Import SCSS
import "../ExercisesList/ExercisesList.scss";

export default function ExercisesList( {exercises} ) { 

    const myData = [].concat(exercises)
    .sort((a, b) => a.created_at > b.created_at ? -1 : 1)
    .slice( 0, 5 );

    return (
        <ul className="exercises__list list">
            {myData.map(exercise => {
                return (
                    <ExercisesItem 
                        key={exercise.id}
                        id={exercise.id}
                        name={exercise.name}
                    />
                    
                )
            })}
        </ul>
    );
}
