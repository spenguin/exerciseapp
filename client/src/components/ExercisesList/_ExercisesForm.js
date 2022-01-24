// Exercises Form
// called from ExercisesList.js


//Import node components
import React, {Component} from 'react';
import axios from 'axios';
import {v4 as uuid} from "uuid";


// import SCSS
import "./ExercisesList.scss";

export default class ExercisesForm extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            message: ""
        }
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    
    // ( {selectedCategory, categories} ) {
 
    submit = (e) => {
        e.preventDefault();
        console.log( 'target', e.target );
        console.log( 'name', e.target.name.value );
        // Reset the message
        this.setState({
            message: ""
        })

        // Validate the name
        if( !e.target.name.value )
        {
            this.setState({
                message: "Exercise must have a name"
            })
        }
        else if( !this.isNameUnique( e.target.name.value ) )
        {
            this.setState({
                message: "Exercise name must be unique"
            })
        }
        else
        {
            // Name is okay. 
            // Should probably sanitise both name and the description, though FIX
            axios
                .post( 'http://localhost:8080/exercises', {
                    name: e.target.name.value
                })
                .then( response => {
                    console.log( 'response', response.data );
                })
                .catch( err => console.log( err ) );


        } 

        // if( this.state.exercises.length )
        // {
        //     this.props.passSelection( this.state.exercises );
        //     this.props.toggleModal();
        // }
        // else
        // {
        //     this.setState({
        //         message: "Exercise must have an unique name"
        //     });
        // }
    }

    /**
     * Confirm that the provided Name is unique
     * @param (str) Name
     * @returns (bool) false: name already exists
     */
    isNameUnique = (testName) => {
        console.log( 'exercises', this.props.exerciseList );
        const name = this.props.exerciseList.filter( exercise => exercise.name === testName );
        return name.length === 0;
    }


    componentDidMount() {
        // Fetch the Categories
        axios
            .get( 'http://localhost:8080/categories' )
            .then( response => { 
                response.data.shift()
                this.setState({ 
                    categories: response.data
                });
            })
            .catch( err => console.log( err ) );
    }

    render() {

        const title = this.props.selectedExercise ? 'Amend Exercise' : 'Create a new Exercise';
        
        if( !this.state.categories )
        {
            return( <p>... Loading Categories ...</p> );
        }
        else
        {
            return (
                <form className="exercise-form form" onSubmit={this.submit}>
                    <div className="form__message error">{this.state.message}</div>
                    <h2 className="form__heading">{title}</h2>
                    <label className="form__input-label">Exercise Name (required)</label>
                    <input className="form__input" name="name" placeholder="Exercise name" key={uuid()} />
                    <p className="form__note">Name must be unique</p>

                    <label className="form__input-label">Description</label>
                    <textarea className="form__textarea" placeholder="Description (optional)" key={uuid()}></textarea>

                    <label className="form__input-label">Select Category</label>
                        {
                            this.state.categories.map( category => {
                                const selectedStr = category.id === 2 ? 'checked': ''
                                return (
                                    <div className="form__radio--wrapper">
                                        <input type="radio" className="form__radio" name="category" key={category.id} value={category.id} checked={selectedStr} /><label htmlFor="category" className="form__radio-label">{category.name}</label>
                                    </div>
                                )
                            })
                        }


                    <button className="btn btn__submit">Select</button>
                    <button type="button" className="btn btn__cancel" onClick={this.props.toggleModal}>Cancel</button>                    

                </form>
            )
        }
    }
}