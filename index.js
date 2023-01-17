const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    message:
      "Go to docs - https://github.com/devashu397/Simple-Data-API/#readme",
  });
});

app.get("/men/name", (req, res) => {
  const names = [
    "James",
    "Robert",
    "John",
    "Michael",
    "David",
    "William",
    "Richard",
    "Joseph",
    "Thomas",
    "Charles",
    "Christopher",
    "Daniel",
    "Matthew",
    "Anthony",
    "Mark",
    "Donald",
    "Steven",
    "Paul",
    "Andrew",
    "Joshua",
  ];

  const name = names[Math.floor(Math.random() * names.length)];

  res.send({
    name: `${name}`,
    status: 200,
  });
});

app.get("/women/name", (req, res) => {
  const names = [
    "Mary",
    "Patricia",
    "Jennifer",
    "Linda",
    "Elizabeth",
    "Barbara",
    "Susan",
    "Jessica",
    "Sarah",
    "Karen",
    "Lisa",
    "Nancy",
    "Betty",
    "Margaret",
    "Sandra",
    "Ashley",
    "Kimberly",
    "Emily",
    "Donna",
    "Michelle",
  ];

  const name = names[Math.floor(Math.random() * names.length)];

  res.send({
    name: `${name}`,
    status: 200,
  });
});

app.get("/lastName", (req, res) => {
  const names = [
    "Barlowe",
    "Caddel",
    "Hart",
    "Katz",
    "Laurier",
    "Madden",
    "Elrod",
    "Whitlock",
    "Ashford",
    "Amos",
    "Fleet",
    "Moses",
    "Singh",
    "Remington",
    "Sharpe",
    "Beam",
    "Spade",
    "Driscoll",
    "Undergrove",
    "Finch",
  ];

  const name = names[Math.floor(Math.random() * names.length)];

  res.send({
    lastName: `${name}`,
    status: 200,
  });
});

app.get("/men/email", (req, res) => {
  const firstNames = [
    "James",
    "Robert",
    "John",
    "Michael",
    "David",
    "William",
    "Richard",
    "Joseph",
    "Thomas",
    "Charles",
    "Christopher",
    "Daniel",
    "Matthew",
    "Anthony",
    "Mark",
    "Donald",
    "Steven",
    "Paul",
    "Andrew",
    "Joshua",
  ];

  const lastNames = [
    "Barlowe",
    "Caddel",
    "Hart",
    "Katz",
    "Laurier",
    "Madden",
    "Elrod",
    "Whitlock",
    "Ashford",
    "Amos",
    "Fleet",
    "Moses",
    "Singh",
    "Remington",
    "Sharpe",
    "Beam",
    "Spade",
    "Driscoll",
    "Undergrove",
    "Finch",
  ];

  const email = `${firstNames[Math.floor(Math.random() * firstNames.length)]}${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }@gmail.com`;

  res.send({
    email: `${email.toLowerCase()}`,
    status: 200,
  });
});

app.get("/women/email", (req, res) => {
  const firstNames = [
    "Mary",
    "Patricia",
    "Jennifer",
    "Linda",
    "Elizabeth",
    "Barbara",
    "Susan",
    "Jessica",
    "Sarah",
    "Karen",
    "Lisa",
    "Nancy",
    "Betty",
    "Margaret",
    "Sandra",
    "Ashley",
    "Kimberly",
    "Emily",
    "Donna",
    "Michelle",
  ];

  const lastNames = [
    "Barlowe",
    "Caddel",
    "Hart",
    "Katz",
    "Laurier",
    "Madden",
    "Elrod",
    "Whitlock",
    "Ashford",
    "Amos",
    "Fleet",
    "Moses",
    "Singh",
    "Remington",
    "Sharpe",
    "Beam",
    "Spade",
    "Driscoll",
    "Undergrove",
    "Finch",
  ];

  const email = `${firstNames[Math.floor(Math.random() * firstNames.length)]}${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }@gmail.com`;

  res.send({
    email: `${email.toLowerCase()}`,
    status: 200,
  });
});

app.get("/men/profile", (req, res) => {
  const firstNames = [
    "James",
    "Robert",
    "John",
    "Michael",
    "David",
    "William",
    "Richard",
    "Joseph",
    "Thomas",
    "Charles",
    "Christopher",
    "Daniel",
    "Matthew",
    "Anthony",
    "Mark",
    "Donald",
    "Steven",
    "Paul",
    "Andrew",
    "Joshua",
  ];

  const lastNames = [
    "Barlowe",
    "Caddel",
    "Hart",
    "Katz",
    "Laurier",
    "Madden",
    "Elrod",
    "Whitlock",
    "Ashford",
    "Amos",
    "Fleet",
    "Moses",
    "Singh",
    "Remington",
    "Sharpe",
    "Beam",
    "Spade",
    "Driscoll",
    "Undergrove",
    "Finch",
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${firstName}${lastName}@gmail.com`;

  res.send({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    email: `${email.toLowerCase()}`,
    status: 200,
  });
});

app.get("/women/profile", (req, res) => {
  const firstNames = [
    "Mary",
    "Patricia",
    "Jennifer",
    "Linda",
    "Elizabeth",
    "Barbara",
    "Susan",
    "Jessica",
    "Sarah",
    "Karen",
    "Lisa",
    "Nancy",
    "Betty",
    "Margaret",
    "Sandra",
    "Ashley",
    "Kimberly",
    "Emily",
    "Donna",
    "Michelle",
  ];

  const lastNames = [
    "Barlowe",
    "Caddel",
    "Hart",
    "Katz",
    "Laurier",
    "Madden",
    "Elrod",
    "Whitlock",
    "Ashford",
    "Amos",
    "Fleet",
    "Moses",
    "Singh",
    "Remington",
    "Sharpe",
    "Beam",
    "Spade",
    "Driscoll",
    "Undergrove",
    "Finch",
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${firstName}${lastName}@gmail.com`;

  res.send({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    email: `${email.toLowerCase()}`,
    status: 200,
  });
});

app.listen(3000, () => {
  console.log("Listening to http://localhost:3000");
});
