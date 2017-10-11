const games = [
  {
    id: 1,
    title: 'Horizon: Zero Dawn',
    platform: 'PlayStation 4',
    genre: 'Action, Adventure',
    price: 2500.00,
    type: 'owned',
    photoUrl: '',
  },
  {
    id: 2,
    title: 'Dirt Rally',
    platform: 'PlayStation 4',
    genre: 'Racing',
    price: 1650.00,
    type: 'owned',
    photoUrl: '',
  },
];

export default {
  Query: {
    games: () => {
      return games;
    }
  },

  Mutation: {
    addGame: (_, data) => {
      data.id = games.length + 1
      data.type = 'not-owned'

      games.push(data)

      return data
    }
  }
};
