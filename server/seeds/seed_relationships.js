
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, eId: 1, parentId: 0},
        {id: 2, eId: 2, parentId: 1 },
        {id: 3, eId: 3, parentId: 1 },
        {id: 4, eId: 4, parentId: 1 },
        {id: 5, eId: 5, parentId: 2 },
        {id: 6, eId: 5, parentId: 3 },
        {id: 3, eId: 5, parentId: 4 },
        {id: 5, eId: 6, parentId: 2 },
        {id: 6, eId: 6, parentId: 3 },
        {id: 3, eId: 6, parentId: 4 },        
      ]);
    });
};
