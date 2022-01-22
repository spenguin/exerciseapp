// Create Classes page
// called from app.js

// import nodes
import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// import components
import Modal from "../../components/Modal/Modal";
import ClassForm from "../../components/ClassForm/ClassForm";

// import utilities
import {organiseExercises} from "../../utils/ArrayUtils/ArrayUtils";

// import SCSS
import "./CreateClasses.scss";

export default class CreateClasses extends Component {
    // This isn't right but it'll get us over the hump
    state = {
        exerciseList: null,
        displayModal: true,
        selectedExercises: {
            2: {},
            3: {},
            4: {}
        },
        currentCategory: 2
    };
    

    componentDidMount() {
        // Fetch Goal Exercises
        axios
            .get( 'http://localhost:8080/exercises/category' )
            .then( response =>{ 
                let exercises = organiseExercises( response.data ); 
                this.setState({
                    exerciseList: exercises
                })
            })
            .catch( err => console.log( err ) ); 
    }

    componentDidUpdate() {

    }


    render() { 

        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
        }       
        
        const passSelection = (passedExercises) => { 
            const selectedCategoryExercises = this.state.exerciseList[this.state.currentCategory].children.filter( exercise => passedExercises.includes( exercise.id.toString() ) );

            const update = { [this.state.currentCategory]: {
                name: this.state.exerciseList[this.state.currentCategory].name,
                children: selectedCategoryExercises }
            }
            this.setState({
                selectedExercises: Object.assign( this.state.selectedExercises, update ),
                currentCategory: this.state.currentCategory + 1
            })
        }

        const sendList = () => {

        }

        if( !this.state.exerciseList )
        {
            return ( <p>... Loading Exercises ...</p> );
        }
        else
        {
            return (
                <section className="exercises site-main">
                    <div className="exercises-wrapper max-wrapper">
                        <Link to="/" className="site-main__link">Home</Link>
                        <div className="exercises__list--wrapper list__wrapper">
                            <div className="exercise__list--selected list__presented">
                                {   
                                    Object.entries( this.state.selectedExercises ).map( exercises => { //console.log( 'exercises.children', exercises[1].children );
                                    if( exercises[1].children )
                                    {
                                        return (
                                            <>
                                                <h3>{exercises[1].name} exercises selected</h3>
                                                <ul className="list__presented--list">
                                                { exercises[1].children.map( exercise => {
                                                    return (
                                                        <li className="list__presented--item" key={exercise.id}>{exercise.name}</li>
                                                    )
                                                })}

                                                </ul>
                                            </>
                                        )
                                    }
                                    else
                                    {
                                        return ("");
                                    }

                                })}
                                {(() => {
                                    if( this.state.exerciseList.length === this.state.currentCategory ) 
                                    {
                                        return (
                                            <div className="exercise__list--navigation">
                                                <button className="btn btn__send" onClick={sendList}>Send selected exercises to your email</button>
                                                <button className="btn btn__cancel" >Start Again</button>
                                            </div>
                                        )
                                    }
                                    else
                                    {
                                        return (
                                            <>
                                                <div className="exercises__message">
                                                    <p>Select the {this.state.exerciseList[this.state.currentCategory].name} exercises</p>
                                                </div>
                                                <Modal isActive={this.state.displayModal}>
                                                    <ClassForm exerciseList={this.state.exerciseList[this.state.currentCategory]} toggleModal={toggleModal} passSelection={passSelection} />
                                                </Modal>
                                                <button className="btn btn__add" onClick={toggleModal}>Select {this.state.exerciseList[this.state.currentCategory].name} Exercises</button>
                                                <button className="btn btn__cancel" >Start Again</button>
                                            </>
                                        )
                                    }
                            })()}                                
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}