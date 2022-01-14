
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meta').del()
    .then(function () {
      // Inserts seed entries
      return knex('meta').insert([
        {
          id: 1, 
          parentId: 0,
          name: 'Categories',
          slug: 'categories'
        },
        {
          id: 2, 
          parentId: 1,
          name: 'Goals',
          slug: 'goals'
        },  
        {
          id: 3, 
          parentId: 1,
          name: 'Builders',
          slug: 'builders'
        },
        {
          id: 4, 
          parentId: 1,
          name: 'Warm-ups',
          slug: 'warm-ups'
        },                      
      ]);
    });
};
