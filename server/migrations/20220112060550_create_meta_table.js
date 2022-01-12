
exports.up = function(knex) {
  return knex.schema.createTable( "meta", function( table ) {
    table.increments( "id" ).primary();
    table.integer( "parentId" );
    table.string( 'name' ).notNullable();
    table.string( 'slug' ).notNullable();    
  } );
};

exports.down = function(knex) {
    return knex.schema.dropTable( 'meta' );  
};
