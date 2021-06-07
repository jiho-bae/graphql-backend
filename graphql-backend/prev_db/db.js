export let players = [
  {
    id: "0",
    name: "Kante",
    age: 29,
    position: "mid",
  },
  {
    id: "1",
    name: "Mount",
    age: 21,
    position: "mid",
  },
  {
    id: "2",
    name: "Werner",
    age: 23,
    position: "fwrd",
  },
  {
    id: "3",
    name: "Havertz",
    age: 22,
    position: "fwrd",
  },
  {
    id: "4",
    name: "Mendy",
    age: 28,
    position: "keeper",
  },
  {
    id: "5",
    name: "Azpi",
    age: 31,
    position: "def",
  },
  {
    id: "6",
    name: "Rudiger",
    age: 29,
    position: "def",
  },
];

export const getPlayers = () => players;

export const getById = (id) => {
  const filteredPlayer = players.filter((player) => String(id) === player.id);
  return filteredPlayer[0];
};

export const deletePlayer = (id) => {
  const restPlayers = players.filter((player) => String(id) !== player.id);
  if (players.length > restPlayers.length) {
    players = restPlayers;
    return true;
  } else {
    return false;
  }
};

export const addPlayer = (name, age, position) => {
  const newPlayer = {
    id: `${players.length + 1}`,
    name,
    age,
    position,
  };
  players.push(newPlayer);
  return newPlayer;
};
