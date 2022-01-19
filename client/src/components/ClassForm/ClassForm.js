// Class List componet
// called from CreateClasses.js

// import node modules
import React, {useState} from "react";

// import components



// import SCSS
import "./ClassForm.scss";

export default function ClassList( {exerciseList, toggleModal} ) { 

    if( !exerciseList )
    {
        return( <p>... Loading Exercises - 2 ...</p> );
    }
    else
    {   
        return (
            <form className="class__list--form form">
                <h2 className="form__heading">Select all Class Exercises</h2>
                <label className="form__input-label">Select at least one</label>
                { exerciseList.map( exercise  => { 
                    return (
                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" name="exerciseId" value={exercise.id} />
                            <label className="form__checkbox-label">{exercise.name}</label>
                        </div>
                )})}

                <button className="btn btn__submit">Select</button>
                <a onClick={toggleModal} className="modal__toggle">Cancel</a>
            </form>
        );
    }
}