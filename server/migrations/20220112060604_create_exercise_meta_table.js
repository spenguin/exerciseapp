
exports.up = function(knex) {
    return knex.schema.createTable( "exercise_meta", function( table ) {
        table.increments( "id" ).primary();
        table
        .integer( "eId", 11 ).unsigned()
        .references( "id" )
        .inTable( "exercises" )
        table
        .integer( "mId", 11 ).unsigned()
        .references( "id" )
        .inTable( "meta" )
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable( 'exercise_meta' );   
};
