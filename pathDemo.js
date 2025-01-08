import path from "path";

const filePath = "./dir1/dir2/test.txt";

//basename()
console.log(path.basename(filePath));
// PS D:\Node Exp\node-js-crash> node pathDemo.js
// test.txt

//dirname()
console.log(path.dirname(filePath));
// ./dir1/dir2

//extention name extname()
console.log(path.extname(filePath));
// .txt

//parse
console.log(path.parse(filePath));
// {
//     root: '',
//     dir: './dir1/dir2',
//     base: 'test.txt',
//     ext: '.txt',
//     name: 'test'
//   }

import url from "url";
//

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("FILE NAME ", __filename);
console.log("DIR NAME ", __dirname);
// FILE NAME  D:\Node Exp\node-js-crash\pathDemo.js
// DIR NAME  D:\Node Exp\node-js-crash

//join()
const filePath2 = path.join(__dirname, "dir1", "dir2", "teest1.txt");
console.log(filePath2);
// D:\Node Exp\node-js-crash\dir1\dir2\teest1.txt

//resolve()
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "teest1.txt");
console.log(filePath3);
// D:\Node Exp\node-js-crash\dir1\dir2\teest1.txt
