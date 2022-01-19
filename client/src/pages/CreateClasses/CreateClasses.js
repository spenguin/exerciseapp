// Create Classes page
// called from app.js

// import nodes
import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// import components
import Modal from "../../components/Modal/Modal";
import ClassForm from "../../components/ClassForm/ClassForm";

// import SCSS
import "./CreateClasses.scss";

export default class CreateClasses extends Component {
    // This isn't right but it'll get us over the hump
    state = {
        goalList: null,
        buildersList: null,
        warmupsList: null,
        displayModal: true,
        selectedExercises: null
    };
    

    componentDidMount() {
        // Fetch Goal Exercises
        axios
            .get( 'http://localhost:8080/exercises/category/2' )
            .then( response =>{ 
                this.setState({
                    goalList: response.data
                })
            })
            .catch( err => console.log( err ) ); 
    }


    render() {

        // const [isActive, setActive] = useState("false");

        const toggleModal = () => {
            this.setState( { displayModal: !this.state.displayModal } )
            // setActive(!isActive);
        }       
        
        const submitExercises = (e) => {
            e.preventDefault();
            console.log( 'e', e.target.exerciseId.value );
        }
        
        const goalList = this.state.goalList;
        if( !this.state.goalList )
        {
            return ( <p>... Loading Exercises - 1 ...</p> );
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
                                <ClassForm exerciseList={this.state.goalList} toggleModal={toggleModal} submitExercises={submitExercises} />
                            </Modal>
                            <button className="btn btn__add" onClick={toggleModal}>Select Goal Exercises</button> 
                        </div>
                    </div>
                </section>
            )
        }
    }
}