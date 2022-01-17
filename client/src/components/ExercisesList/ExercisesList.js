// component ExercisesList.js
// called from ViewExercises.js

//Import node components
import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import ExercisesItem from './_ExercisesItem';
import ExercisesForm from './_ExercisesForm';

// Import Utils
import {shapeNestedArray} from "../../utils/ArrayUtils/ArrayUtils";

// Import SCSS
import "../ExercisesList/ExercisesList.scss";

export default function ExercisesList( {exercises, selectedExercise} ) {
    let o = shapeNestedArray( exercises, 'parentId' );

    return (
        <div className="exercises__list--wrapper list__wrapper">
            <ExercisesForm selectedExercise={selectedExercise} exercises={exercises} />
            <ul className="exercises__list list">
                {exercises.map(exercise => {
                    return (
                        <ExercisesItem 
                            key={exercise.id}
                            id={exercise.id}
                            name={exercise.name}
                        />
                        
                    )
                })}
                <li className="exercises__list--item list__item">
                    <Link to={ `/exercises` }>Add a New Exercise</Link>
                </li>
            </ul>
        </div>
    );
}
