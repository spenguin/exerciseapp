// Home Page 
// called from app.js

import {Link} from 'react-router-dom';

// SCSS
import "../HomePage/HomePage.scss";


function HomePage() {
    return (
        <section className="home site-main">
            <div className="home-wrapper site-wrapper max-wrapper">
                <Link to="/createclasses" className="home__link btn btn__nav">Create an Exercise Class</Link>
                <Link to="/exercises" className="home__link btn btn__nav">Create or Edit Exercises</Link>
                <Link to="/categories" className="home__link btn btn__nav">Create or Edit Categories</Link>
            </div>
        </section>
    )
}


export default HomePage