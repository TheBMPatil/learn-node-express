import http from "http";
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(
    JSON.stringify({
      message: "Server OK ",
    })
  );

  // res.setHeader("Content-Type", "text/html"); //Sets type of conent
  // console.log("Started")
  //   res.write("Namashkar I am bhagvat here"); //Writing data on stream
  //   res.end("Hello server is running..."); //Ending stream
  //   res.end("<h2>Hello server is running...</h2>"); //Ending stream
});
server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
