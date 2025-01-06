//Creating APIS
// console.log("Welcome");
import { createServer } from "http";
const PORT = process.env.PORT;
const users = [
  { id: 1, name: "Bhagvat" },
  { id: 2, name: "Ankush" },
  { id: 3, name: "Ajay" },
  { id: 4, name: "Pravin" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    res.setHeader("Content-type", "application/json");
    const id = req.url.split("/")[3];
    // console.log(id);
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User Not Found " }));
    }
    res.end();
  } else {
    res.setHeader("Content-type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
