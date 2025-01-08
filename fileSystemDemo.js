// import fs from "fs";
import fs, { appendFile } from "fs/promises";
//ReadFile Callback
// fs.readFile("./test.txt", "UTF-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//reafFileeSync() sync version
// const data1 = fs.readFileSync("./test.txt", "UTF-8");
// console.log(data1);

//readFile - Promise version
//..then()

// fs.readFile("./test.txt", "UTF-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//readFile
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "UTF-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

//Write File
const writeFile = async () => {
  try {
    await fs.writeFile(
      "./test.txt",
      "Helllo imm writing this content to the filee....."
    );
    console.log("File  Written to....");
  } catch (error) {
    console.log(error);
  }
};

//appendFile
const appendMyFile = async () => {
  try {
    await appendFile("./test.txt", "   \nHmmm Appending the data ");
    console.log("Appending my data..!");
  } catch (error) {}
};
// readFile();
writeFile();
appendMyFile();
readFile();
