const users = [
  { name: "Peter Akaliro", score: 95.9, gender:"Male" },
  { name: "Steve Jobs", score: 50.1, gender: "Male" },
  { name: "Emeka Wonder", score: 49.7, gender: "Male" },
  { name: "Jane Doe", score: 12.5, gender: "Female" },
];

const newUsers = users.map((singleValue) => {
    return {lastName: singleValue.name.split(" ")[1], score: singleValue.score};
});
// console.log(newUsers);

const filteredUsers = users.filter((singleValue) => singleValue.gender === "Female",);
// console.log(filteredUsers);

const passedUsers = users.filter((user) => user.score >= 50);
console.log(passedUsers)