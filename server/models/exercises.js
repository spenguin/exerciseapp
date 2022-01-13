// Exercises model

const { v4: uuid } = require( "uuid" );
const fs = require( "fs" );

const dataFilePath = "./data/exercises.json";

// Basic CRUD functionality

const createData = () => {

}
/**
 * @param (str) id - optional
 * @returns (object) All videos, or video specified by the id
 */
const readData = (id = null) => {
    
    let data = fs.readFileSync(dataFilePath);
    data = JSON.parse( data );
    
    if( id )
    {   
        let test = data.find( (datum) => datum.id === id );
        return data.find( (datum) => datum.id === id );
    }

    return data;
}

const updateData = () => {

}

const deleteData = () => {

}

module.exports = {
    createData,
    readData,
    updateData,
    deleteData
};