
exports.seed = function(knex, Promise) {
  return knex('games').insert([
    {
      title: 'Horizon: Zero Dawn',
      platform: 'PlayStation 4',
      genre: 'Action, Adventure',
      price: 0,
      type: 'library',
      photoUrl: '',
    },
    {
      title: 'Dirt Rally',
      platform: 'PlayStation 4',
      genre: 'Racing',
      price: 1650.00,
      type: 'library',
      photoUrl: '',
    },
  ]);
};
