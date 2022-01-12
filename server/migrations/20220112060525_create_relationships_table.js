
exports.up = function( knex ) {
    return knex.schema.createTable( "relationships", function( table ) {
        table.increments( "id" ).primary();
        table
            .integer( "eId", 11 ).unsigned()
            .references( "id" )
            .inTable( "exercises" )
        table
            .integer( "parentId", 11 ).unsigned()
            .references( "id" )
            .inTable( "exercises" );
    });
  
};

exports.down = function( knex ) {
    return knex.schema.dropTable( 'relationships' );  
};
