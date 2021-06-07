import { getById, getPlayers, addPlayer, deletePlayer } from "./db";

const resolvers = {
  Query: {
    players: () => getPlayers(),
    player: (_, { id }) => getById(id),
  },
  Mutation: {
    addPlayer: (_, { name, age, position }) => addPlayer(name, age, position),
    deletePlayer: (_, { id }) => deletePlayer(id),
  },
};

export default resolvers;
