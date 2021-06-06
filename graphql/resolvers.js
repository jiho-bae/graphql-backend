const Kante = {
  name: "Kante",
  age: 29,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => Kante,
  },
};

export default resolvers;
