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
    addGame: async (_, data) => {
      // TODO: add validation
      const game = new Game({ ...data, type: 'wishlist' });
      const result = await game.save()

      return result.toJSON()
    }
  }
};
