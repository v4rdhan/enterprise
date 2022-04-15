// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const {Client} = require('pg')

const client = new Client({
  host: "ec2-34-197-84-74.compute-1.amazonaws.com",
  database: "d2v1aj6saamsi9",
  user: "rmycdniqxhowpv",
  port: 5432,
  password: "deb0c16207eb6679f5a1d0f7709b2f7db58fe7c3d8b0b560c2652c25e67ee6a9"
})

client.connect();

client.query(`SELECT NOW()`, (err, res) => {
  console.log(err,res);
  client.end;
})