// Exercises Controller 

const knex = require('knex')(require('../knexfile').development);
const { v4: uuid } = require('uuid');

// Helper functions
require( "../helpers/helperFunctions" );

exports.index = ( _req, res ) => {  
    // Select id, name from exercises;
    const id = _req.body ? _req.body.id : null;

    if( id )    // Read a single row
    {
        knex('meta')
        .where({ id: id })
        .then((data) => {
          // Diving Deeper (return 404 if the warehouse isn't found)
          if (!data.length) {
            return res.status(404).json({ success: false, error: 'Category not found' });
          }
    
          // Diving Deeper (single entity should return one object)
          res.status(200).json(data[0]);
        })
        .catch((err) =>
          res.status(400).send(`Error retrieving category ${id} ${err}`)
        );
    }
    else
    {
        knex( 'meta' )
            .select( 'id', 'parentId', 'name', )
            .then( (data) => {
                data = nestArray( data, 'id', 'parentId' );
                res.status(200).json(data);
            })
            .catch((err) => res.status(400).send( "Error retrieving Categories list" ) 
        );
    }
}


exports.add = ( _req, res ) => { console.log( "req", _req );
    if( !_req.body.name ) {
        return res.status( 400 ).json({ success: false, error: 'Please provide required information' });
    }

    knex( 'meta' )
        .insert( {
            parentId: _req.body.parentId ? _req.body.parentId : 0,
            name: _req.body.name,
            slug: convertToSlug( _req.body.name )
        })
        .then( (data) => {
            res.status(201).json(data[0]);
        })
        .catch((err) => res.status(400).send(`Error creating Category: ${err}`));
}
