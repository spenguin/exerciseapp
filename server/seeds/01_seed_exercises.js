
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {id: 1, name: 'L-Sit 3s to 4s', slug: 'l-sit-3s-to-4s'},
        {id: 2, name: 'Back Lunge with Rotation Reach', slug: 'back-lunge-with-rotation-reach'},
        {id: 3, name: 'Forward Lunge with Rotation Reach', slug: 'forward-lunge-with-rotation-reach'},
        {id: 4, name: 'Side Planks', slug: 'side-planks'},
        {id: 5, name: 'Trunk Side Bends', slug: 'trunk-side-bends'},
        {id: 6, name: 'Penguin High Knees', slug: 'penguin-high-knees'}
      ]);
    });
};
