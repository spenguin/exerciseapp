// Class List componet
// called from CreateClasses.js
// Code borrowed from https://www.tutsmake.com/react-js-get-multiple-checkbox-value-on-submit-example/

// import node modules
import React, {Component} from "react";

// import SCSS
import "./ClassForm.scss";

export default class ClassForm extends Component {
    constructor() {
        super();
        this.state = {
            exercises: [],
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange = ( e ) => {
        const target = e.target;
        var value = target.value;
        if( target.checked ) {
            let newExercises = [...this.state.exercises, value]; 
            this.setState({
                exercises: newExercises
            })
        }
        else
        {
            let index = this.state.exercises.indexOf( value ); 
            if( this.state.exercises.length === 1 )
            {
                this.setState({
                    exercises: []
                })
            }
            else
            {
                let newExercises = this.state.exercises.splice( index, 1 ); console.log( 'new', newExercises );
                this.setState({
                    exercises: this.state.exercises.splice( index, 1 )
                });
            }
        }
    }

    submit = (e) => {
        e.preventDefault();
        if( this.state.exercises.length )
        {
            this.props.passSelection( this.state.exercises );
            this.props.toggleModal();
        }
        else
        {
            this.setState({
                message: "At least one Exercise must be selected"
            });
        }

    }

 

    render() {

        if( !this.props.exerciseList )
        {
            return( <p>... Loading Exercises ...</p> ); 
        }
        else
        {
            return (
                <form className="class__list--form form" onSubmit={this.submit}>
                    <div className="form__message error">{this.state.message}</div>
                    <h2 className="form__heading">Select all Class Exercises</h2>
                    <label className="form__input-label">Select at least one</label>

                    { this.props.exerciseList.children.map( exercise  => { 
                        return (
                            <div className="form__checkbox-wrapper" key={exercise.id}>
                                <input type="checkbox" name="exerciseId" value={exercise.id}  onChange={this.handleInputChange}/>
                                <label className="form__checkbox-label">{exercise.name}</label>
                            </div>
                    )})}

                    <button className="btn btn__submit">Select</button>
                    <a onClick={this.props.toggleModal} className="modal__toggle">Cancel</a> {/* FIX */}
                </form>
            );
        }
    }
}