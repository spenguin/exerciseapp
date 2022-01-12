
exports.up = function(knex) {
  return knex.schema.createTable( 'exercises', function( table ){
      table.increments( "id" ).primary();
      table.string( 'name' ).notNullable();
      table.string( 'slug' ).notNullable();
      table.text( 'description' );
      table.timestamp( "created_at" ).defaultTo(knex.fn.now() );
      table.timestamp( "updated_at" );
      table.boolean( 'status' ).defaultTo( 1 );
  });
};

exports.down = function( knex ) {
  return knex.schema.dropTable( 'exercises' );
};
