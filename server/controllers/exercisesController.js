// Exercises Controller 

const knex = require('knex')(require('../knexfile').development);
const { v4: uuid } = require('uuid');

exports.index = ( _req, res ) => {
    // Select id, name from exercises;
    const {id} = _req.params.id;

    if( id )    // Read a single row
    {
        knex('warehouse')
        .where({ id: id })
        .then((data) => {
          // Diving Deeper (return 404 if the warehouse isn't found)
          if (!data.length) {
            return res.status(404).json({ success: false, error: 'Warehouse not found' });
          }
    
          // Diving Deeper (single entity should return one object)
          res.status(200).json(data[0]);
        })
        .catch((err) =>
          res.status(400).send(`Error retrieving warehouse ${id} ${err}`)
        );
    }
    else
    {
        knex( 'exercises' )
            .select( 'id', 'name' )
            .then( (data) => {
                res.status(200).json(data);
            })
            .catch((err) => res.status(400).send( "Error retrieving Exercises" ) 
        );
    }
}

exports.categoryExercises = ( _req, res ) => {
    // Select Exercise Id, Exercise Name from exercises where categoryId = id
    knex( 'exercises as e' )
        .innerJoin( 'exercise_meta as em', 'e.id', 'em.eId' )
        .then( ( data ) => {
            res.status(200).json(data);
        });
}


exports.add = ( _req, res ) => { console.log( "req", _req );
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
        .catch((err) => res.status(400).send(`Error creating Exercise: ${err}`));
}


/**
 * Converts a title string to a slug, 
 * i.e. removes all non-alphanumeric characters
 * and replaces spaces with hyphens
 * @param {str} Text 
 * @returns {str}
 * https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
 */

function convertToSlug(Text) {
    return Text.toLowerCase()
               .replace(/[^\w ]+/g, '')
               .replace(/ +/g, '-');
}
