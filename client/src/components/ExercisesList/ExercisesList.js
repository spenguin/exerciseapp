// component ExercisesList.js
// called from ViewExercises.js

//Import node components
import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import CategoriesItem from './_ExercisesItem';
// import CategoriesForm from './_ExercisesForm';

// Import SCSS
import "../ExercisesList/ExercisesList.scss";

export default function ExercisesList( {exercises, selectedExercise} ) {
    return (
        <div className="exercises__list--wrapper list__wrapper">
            <CategoriesForm selectedExercise={selectedExercise} exercises={exercises} />
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
