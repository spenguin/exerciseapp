// Display List component
// called from _ExerciseForm.js and CreateClasses.js

// import node.js modules
import React, {Component} from "react";


// import SCSS
import "./DisplayList.scss";


export default class DisplayList extends Component {
    constructor() {
        super();
        this.state = {
            selected: []
        }
        // this.handleTextareaChange = this.handleTextareaChange.bind(this);
        // this.submit = this.submit.bind(this);
    }
    static defaultProps = {
        list: null,
        selected: []
    }



    handleDisplayClick = (id) => (e) => {

        const s = this.state.selected;
        // If id is in selected, remove; otherwise, add
        if( -1 === this.state.selected.indexOf( id ) )
        {
            s.push( id );
        }
        else
        {
            s.splice( s.indexOf( id ), 1 )
        }
        this.setState({
            selected: s
        });
        
        // Add class to input parent
        if( e.target.parentElement.classList.contains( 'selected' ) )
        {
            e.target.parentElement.classList.remove( 'selected' );
        }
        else
        {
            e.target.parentElement.classList.add( 'selected' );
        }
    }

    componentDidMount() {
        this.setState({
            selected: this.props.selected
        });
    }

    render(){
        
        if( !this.props.list )
        {
            return( <p></p> );
        }
        else
        {

            return (
                <div className="display-list">
                    <input type="hidden" name="selected" value={this.state.selected} />
                    <h2 className="display-list__title">Select those exercises that are supported</h2>
                    <div className="display-list--wrapper" >
                        {
                            this.props.list.children.map( item => {
                                return (
                                    <div className="display-list__item" >
                                        <input 
                                            type="checkbox" 
                                            name="parentId" 
                                            key={item.id} 
                                            value={item.id} 
                                            onClick={this.handleDisplayClick(item.id)} 
                                            checked={-1 !== this.state.selected.indexOf( item.id ) }
                                        />
                                        <label htmlFor="parentId" className="display-list__item--label" onClick={this.handleDisplayClick(item.id)}>{item.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }
    
    // const handleDisplayClick = (id) => {

    // }
    // if( !list )
    // {
    //     return( <p></p>);
    // }
    // else
    // {   
  
    //     )
    // }
}