// Exercises Form
// called from ExercisesList.js


//Import node modules
import React, {Component} from 'react';
import axios from 'axios';
// import {v4 as uuid} from "uuid";

//import components
import DisplayList from '../DisplayList/DisplayList';

// Import Utilities
import {organiseExercises} from "../../utils/ArrayUtils/ArrayUtils";


// import SCSS
import "./ExercisesList.scss";

export default class ExercisesForm extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            message: "",
            defaultOption: 2,
            textareaValue: "",
            sortedExercises: null,
            selectedCategory: 2
        }
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.submit = this.submit.bind(this);

    }

    
    submit = (e) => {
        e.preventDefault();

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
                    name: e.target.name.value,
                    description: e.target.description.value,
                    categoryId: e.target.categoryId.value
                })
                .then( response => {
                    console.log( 'response', response.data );
                    // return response
                    window.location.replace( `/exercises/` );
                })
                .catch( err => console.log( err ) );

            e.target.reset();
            this.props.toggleModal();
        } 
    }

    /**
     * Confirm that the provided Name is unique
     * @param (str) Name
     * @returns (bool) false: name already exists
     */
    isNameUnique = (testName) => {
        // console.log( 'exercises', this.props.exerciseList );
        const name = this.props.exerciseList.filter( exercise => exercise.name === testName );
        return name.length === 0;
    }

    /**
     * Reset the form then toggle the Modal
     */
    formReset = () => { 
        if( this.props.selectedExercise )
        {
            window.location.replace( '/exercises' );
        }
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
        this.props.toggleModal();
    }

    changeOption = (id) => (e) => {
       
        this.setState({
            defaultOption: id
        });

        if( this.props.selectedExercise )
        {
            this.setState({
                defaultOption: this.props.selectedExercise[0].mId
            })
        }

        // Need to present the possible parent Exercises 
        if( !(id === this.state.selectedCategory ) )
        {
            this.setState({
                selectedCategory: id
            });
            
            switch( id ) {
                case 3:
                    this.setState({
                        parentList: this.state.sortedExercises[2]
                    });
                    break;
                case 4 :
                    this.setState({
                        parentList: this.state.sortedExercises[3]
                    });
                    break;
                default:
                    this.setState({
                        parentList: []
                    });
            }
        }

    }

    handleTextareaChange = (e) => {
        this.setState({
            textareaValue: e.target.value
        })
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
        if( this.props.selectedExercise )
        {
            this.setState({
                defaultOption: this.props.selectedExercise[0].mId,
                textareaValue: this.props.selectedExercise[0].description,
            });
        }
        if( this.props.exerciseList )
        {
            this.setState({
                sortedExercises: organiseExercises( this.props.exerciseList )
            })
        }
    }

    render() { 

        if( !this.state.categories )
        {
            return( <p>... Loading Categories ...</p> );
        }
        else
        {
            const title = this.props.selectedExercise ? 'Amend Exercise' : 'Create a new Exercise'; 

            return (
                <form className="exercise-form form" onSubmit={this.submit}>
                    <div className="form__message error">{this.state.message}</div>
                    <h2 className="form__heading">{title}</h2>
                    <label className="form__input-label">Exercise Name (required)</label>
                    {(() => {
                        if( this.props.selectedExercise )
                        {
                            return ( <p className="form__input-statement">{this.props.selectedExercise[0].name }</p> )
                        }
                        else
                        {
                            return ( <input className="form__input" name="name" placeholder="Exercise name" /> )
                        }
                    })()}
                    
                    <p className="form__note">Name must be unique</p>

                    <label className="form__input-label">Description</label>
                    <textarea className="form__textarea" placeholder="Description (optional)" name="description" onBlur={this.textareaValue}></textarea>

                    <label className="form__input-label">Select Category</label>
                        { 
                            this.state.categories.map( category => { 
                                return (
                                    <div className="form__radio--wrapper" >
                                        <input type="radio" className="form__radio" name="categoryId" value={category.id} checked={category.id === this.state.defaultOption} onChange={this.changeOption(category.id)} /><label htmlFor="category" className="form__radio-label" onClick={this.changeOption(category.id)}>{category.name}</label>
                                    </div>
                                )
                            })
                        }
                    {/* {(() => {
                        if( this.props.exerciseList )
                        {
                            return ( <p>... Loading Exercises ...</p> )
                        }
                        else
                        {
                            return ( <DisplayList list={this.state.sortedExercises} /> )
                        }
                    })()}                     */}
                    <DisplayList list={this.state.parentList} />

                    <button className="btn btn__submit">Select</button>
                    <button type="button" className="btn btn__cancel" onClick={() => this.formReset()}>Cancel</button>                    

                </form>
            )
        }
    }
}