import Game from '../../bookshelf/models/Game';

export default {
  Query: {
    games: async () => {
      const games = await Game.fetchAll();

      return games.map(game => {
        return game.toJSON();
      });
    }
  },

  Mutation: {
    addGame: (_, data) => {
      return { id: 100, title: 'Dummy Data' };
    }
  }
};
