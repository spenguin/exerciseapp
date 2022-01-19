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
        displayModal: false
    };
    

    componentDidMount() {
        // Fetch Goal Exercises
        axios
            .get( 'http://localhost:8080/exercises/category/1' )
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
            this.setState( { displayModal: true } )
            // setActive(!isActive);
        }        

        if( !this.state.goalList )
        {
            return ( <p>... Loading Exercises ...</p> );
        }

        return (
            <section className="exercises site-main">
                <div className="exercises-wrapper max-wrapper">
                    <Link to="/" className="site-main__link">Home</Link>
                    <div className="exercises__list--wrapper list__wrapper">
                        <Modal isActive={this.state.displayModal}>
                            <ClassForm classes={this.state.goalList} toggleModal={toggleModal} />
                        </Modal>
                        <button className="btn btn__add" onClick={toggleModal}>Select Goal Exercises</button> 
                    </div>
                </div>
            </section>
        )
    }
}