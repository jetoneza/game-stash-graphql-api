export default `
  type Game {
    id: Int!,
    title: String!,
    type: String!,
    platform: String,
    genre: String,
    price: Float,
    photoUrl: String,
  }

  type Query {
    games: [Game],
  }
`

