import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname, __filename);
const PORT = process.env.PORT;
const server = http.createServer(async (req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  // res.writeHead(200, { "Content-Type": "application/json" })
  try {
    // res.writeHead(404, { "Content-Type": "text/html" });
    // res.end(`<h1>404 page not found</h1>`);
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/") {
        filepath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not found");
      }
      const data = await fs.readFile(filepath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`Server Error ${error}`);
  }
  // res.end(
  //   JSON.stringify({
  //     message: "Server OK ",
  //   })
  // );

  // res.setHeader("Content-Type", "text/html"); //Sets type of conent
  // console.log("Started")
  //   res.write("Namashkar I am bhagvat here"); //Writing data on stream
  //   res.end("Hello server is running..."); //Ending stream
  //   res.end("<h2>Hello server is running...</h2>"); //Ending stream
});
server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
