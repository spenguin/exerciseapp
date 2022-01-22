// View Exercises page
// called from app.js


//Import node components
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Import Components
import ExercisesList from '../../components/ExercisesList/ExercisesList';
import ExercisesForm from '../../components/ExercisesList/_ExercisesForm';
import Modal from "../../components/Modal/Modal";
import Search from "../../components/Search/Search";

// SCSS
import "../ViewExercises/ViewExercises.scss";

export default class ViewExercises extends Component {
    state = {
        exercisesList: null,
        displayModal: true
    }

    componentDidMount() {
        // Fetch list of Categories from server
        axios
            .get( 'http://localhost:8080/exercises' )
            .then( response => { 
                this.setState({
                    exercisesList: response.data
                });
            })
            .catch( err => console.log( err ) );
    }

    componentDidUpdate(prevProps) { 

    }

    render() {

        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
        }           

        if( !this.state.exercisesList )
        {
            return ( <p>... Loading Exercises ...</p> );
        }
        else
        {
            const selectedExercise = this.props.match.params.exerciseId ? this.state.exercisesList[this.props.match.params.exerciseId-1] : null; 
            // console.log( 'selectedExercise', selectedExercise );
            
            return (
                <section className="exercises site-main">
                    <div className="exercises-wrapper max-wrapper">
                        <Link to="/" className="site-main__link">Home</Link>
                        <div className="exercises__list--wrapper list__wrapper">
                            <Search />
                            <div className="exercise__list--selected list__presented">
                                <ExercisesList exercises={this.state.exercisesList} selectedExercise={selectedExercise} />
                                <Modal isActive={this.state.displayModal}>
                                    <ExercisesForm exerciseList={this.state.exerciseList} toggleModal={toggleModal} />
                                </Modal>
                                <button className="btn btn__add" onClick={toggleModal}>Add an Exercise</button>
                            </div>
                        </div>
                    </div>
                </section>
            );            
        }

    }


}