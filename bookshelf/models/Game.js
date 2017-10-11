const Bookshelf = use('Bookshelf').getInstance()

const Game = Bookshelf.Model.extend({
  tableName: 'games'
});

export default Game
