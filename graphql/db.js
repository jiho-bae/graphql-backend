export const people = [
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
    position: "fwrd",
  },
];

export const getById = (id) => {
  const filteredPerson = people.filter((person) => String(id) === person.id);
  return filteredPerson[0];
};
