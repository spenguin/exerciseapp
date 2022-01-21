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


    render() {

        // const [isActive, setActive] = useState("false");

        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
            // setActive(!isActive);
        }       
        
        // const submitExercises = (e) => {
        //     e.preventDefault();
        //     // let currentCategory = this.state.currentCategory;
        //     console.log( 'values', e.target[0].value );
        //     this.setState( {
        //         selectedExercises: {currentCategory: e.target[0].value},
        //         currentCategory: this.state.currentCategory + 1,
        //         displayModal: true
        //     })
        //     console.log( 'selectedExercises', this.state.selectedExercises );
        // }

        const passSelection = (passedExercises) => {
            console.log( 'passed Exercises', passedExercises );
            const update = { [this.state.currentCategory]: passedExercises };

            this.setState({
                selectedExercises: Object.assign( this.state.selectedExercises, update )
            })
            console.log( 'selected Exercises', this.state.selectedExercises );

        }
        
        // const goalList = this.state.goalList;
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
                            <div className="exercises__message">
                                <p>First select the Goal exercises</p>
                            </div>
                            <Modal isActive={this.state.displayModal}>
                                <ClassForm exerciseList={this.state.exerciseList[this.state.currentCategory]} toggleModal={toggleModal} passSelection={passSelection} />
                            </Modal>
                            <button className="btn btn__add" onClick={toggleModal}>Select Goal Exercises</button> 
                        </div>
                    </div>
                </section>
            )
        }
    }
}