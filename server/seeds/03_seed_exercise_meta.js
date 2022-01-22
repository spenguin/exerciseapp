
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise_meta').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_meta').insert([
        {id: 1, eId: 1, mId: 2},
        {id: 2, eId: 2, mId: 3},
        {id: 3, eId: 3, mId: 3},
        {id: 4, eId: 4, mId: 3},
        {id: 5, eId: 5, mId: 4},
        {id: 6, eId: 6, mId: 4}
      ]);
    });
};
