// View Exercises page
// called from app.js


//Import node components
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Import Components
import ExercisesList from '../../components/ExercisesList/ExercisesList';

// SCSS
import "../ViewExercises/ViewExercises.scss";

class ViewExercises extends Component {
    state = {
        exercisesList: []
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

        if( !this.state.exercisesList )
        {
            return ( <p>... Loading Exercises ...</p> );
        }
        else
        {
            const selectedExercise = this.props.match.params.exerciseId ? this.state.exercisesList[this.props.match.params.exerciseId-1] : null; 
            console.log( 'selectedExercise', selectedExercise );
            
            return (
                <section className="exercises site-main">
                    <div className="exercises-wrapper max-wrapper">
                        <Link to="/" className="site-main__link">Home</Link>
                        <ExercisesList exercises={this.state.exercisesList} selectedExercise={selectedExercise} />
                    </div>
                </section>
            );            
        }

    }


}

export default ViewExercises;