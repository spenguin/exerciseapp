// Categories Controller

const { v4: uuid } = require('uuid');
const fs = require('fs');
const model = require( "../models/categories" );

const dataFilePath = "./data/categories.json";

const readFile = () => {
    const data = fs.readFileSync( dataFilePath );
    return JSON.parse( data );
}



// GET /categories
function readData( req, res ){
    const {id} = req.params;

    let o = null;

    if( id )
    {
        o = model.readData( id );
    }
    else
    {
        let data = model.readData();

        o = data; // Usually only some fields of the complete data are returned - not in this case

    }

    res.status(200).json( o );

}