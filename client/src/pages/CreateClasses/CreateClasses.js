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
                let exercises = organiseExercises( response.data ); //console.log( 'exercises2', exercises[2] );
                this.setState({
                    exerciseList: exercises
                })
            })
            .catch( err => console.log( err ) ); 
    }

    componentDidUpdate() {

    }


    render() { //console.log( 'selected Exercises', this.state.selectedExercises );

        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
            // setActive(!isActive);
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



                            {(() => {
                                if( this.state.exerciseList.length === this.state.currentCategory ) 
                                {
                                    return (
                                        <button className="btn btn__send" onClick={sendList}>Send selected exercises to your email</button>
                                    )
                                }
                                else
                                {
                                    return (
                                        <>
                                            <div className="exercise__list--selected list__presented">
                                            {   
                                                Object.entries( this.state.selectedExercises ).map( exercises => { console.log( 'exercises.children', exercises[1].children );
                                                    if( exercises[1].children )
                                                    {
                                                        return (
                                                            <>
                                                                <h3>{exercises[1].name}</h3>
                                                                <ul>
                                                                { exercises[1].children.map( exercise => {
                                                                    return (
                                                                        <li>{exercise.name}</li>
                                                                    )
                                                                })}

                                                                </ul>
                                                            </>
                                                        )
                                                    }

                                                //    return (
                                                //         <>
                                                //         <h3>{exercises[1].name}</h3>
                                                //         <ul>
                                                //         { exercises[1].children.map( exercise => {
                                                //             return (
                                                //                 <li>{exercise.name}</li>
                                                //             )
                                                //         })}
                                                //         </ul>
                                                //         </>
                                                //    )
                                                    
                                                   
                                                //     exercises.map( exercise => {
                                                //         console.log( 'test exercise', exercise );
                                                //    } )
                                                    
                                                })

                                            // console.log( Object.entries( this.state.selectedExercises ) )
                                                // Object.entries( this.state.selectedExercises ).forEach( category => { console.log( 'test category', category );
                                                //     // if( category.children )
                                                //     // {
                                                //         return (
                                                //             <h3>{category.name} exercises selected</h3>
                                                //         )
                                                //     // }
                                                // })
                                                
                                            }
                                            </div>                                        
                                            <div className="exercises__message">
                                                <p>Select the {this.state.exerciseList[this.state.currentCategory].name} exercises</p>
                                            </div>
                                            <Modal isActive={this.state.displayModal}>
                                                <ClassForm exerciseList={this.state.exerciseList[this.state.currentCategory]} toggleModal={toggleModal} passSelection={passSelection} />
                                            </Modal>
                                            <button className="btn btn__add" onClick={toggleModal}>Select {this.state.exerciseList[this.state.currentCategory].name} Exercises</button>
                                        </>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                </section>
            )
        }
    }
}