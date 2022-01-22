// Exercises Controller 

const knex = require('knex')(require('../knexfile').development);
const { v4: uuid } = require('uuid');

// Helper functions
require( "../helpers/helperFunctions" );

// Read all Exercises
exports.index = ( _req, res ) => {
    // Select id, name from exercises;
    const id = _req.body ? _req.body.id : null;

    if( id )    // Read a single row
    {
        knex('exercises')
        .where({ id: id })
        .then((data) => {
          // Diving Deeper (return 404 if the warehouse isn't found)
          if (!data.length) {
            return res.status(404).json({ success: false, error: 'Exercise not found' });
          }
    
          // Diving Deeper (single entity should return one object)
          res.status(200).json(data[0]);
        })
        .catch((err) =>
          res.status(400).send(`Error retrieving exercise ${id} ${err}` )
        );
    }
    else
    {
        knex( 'exercises' )
            // .select( 'id', 'name' ) FIX - May need to add a union
            .orderBy( 'name' )
            .then( (data) => {
                res.status(200).json(data);
            })
            .catch((err) => res.status(400).send( `Error retrieving Exercises [index] ${err}` ) 
        );
    }
}

// Get All Exercises in specified Category
exports.readByCategory = ( _req, res ) => {
    // Select Exercise Id, Exercise Name from exercises where categoryId = id

    knex( 'exercises as e' )
        .innerJoin( 'exercise_meta as em', 'e.id', 'em.eId' )
        .where( 'em.mId', _req.params.categoryId )
        .orderBy( 'name' )
        .then( ( data ) => {
            res.status(200).json(data);
        })
        .catch( (err) => res.status(400).send( `Error retrieving Exercises [readByCategory] ${err}` ) );
}


// Get Exercises with Category Ids
exports.readWithCategory = ( _req, res ) => {
    knex( 'exercises as e' )
        .innerJoin( 'exercise_meta as em', 'e.id', 'em.eId' )
        .orderBy( 'name' )
        .then( ( data ) => {
            res.status(200).json(data);
        })
        .catch( (err) => res.status(400).send( `Error retrieving Exercises [readWithCategory] ${err}` ) );
}

// Get Children Exercise Ids based on ParentIds
exports.readChildren = ( _req, res ) => { 
    knex( 'relationships as r' )
        .whereIn( 'r.parentId', [ _req.query.parentId ] )
        .then( (data) => {
            res.status(200).json( data );
        })
        .catch( (err) => res.status(400).send( `Error retrieving Exercises [readChildren] ${err}` ) );
}


// Add Exercise 
exports.add = ( _req, res ) => { //console.log( "req", _req );
    if( !_req.body.name ) {
        return res.status( 400 ).json({ success: false, error: 'Please provide required information' });
    }

    knex( 'exercises' )
        .insert( {
            name: _req.body.name,
            slug: convertToSlug( _req.body.name )
        })
        .then( (data) => {
            res.status(201).json(data[0]);
        })
        .catch((err) => res.status(400).send( `Error creating Exercise [add]: ${err}` ) );
}