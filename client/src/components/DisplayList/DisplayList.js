// Display List component
// called from _ExerciseForm.js and CreateClasses.js

// import node.js modules
import React from "react";


// import SCSS
import "./DisplayList.scss";


export default function DisplayList( {list} ) {
    
    const handleDisplayClick = (id) => {

    }
    if( !list )
    {
        return( <p></p>);
    }
    else
    {   
        return (
            <div className="display-list">
                <h2 className="display-list__title">Select those exercises that are supported</h2>
                {
                    list.children.map( item => {
                        return (
                            <div className="display-list__item">
                                <input type="checkbox" name="parentId" key={item.id} value={item.id} onClick={handleDisplayClick(item.id)} />
                                <label for="parentId" className="display-list__item--label" onClick={handleDisplayClick(item.id)}>{item.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}