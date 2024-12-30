// console.log("Namaskar mitrooo");
// // console.log(global);
// console.log(process);

// const { generateRandomNumber, celTOFe } = require("./utils"); //Common js syntax
// console.log(`Random number : ${generateRandomNumber()}`);
// console.log(`cel to fe 0 : ${celTOFe(0)}`);

//Using ES Syntax

// import { getAllPosts } from "./postController.js";
import getAllPosts, { getPostsLength } from "./postController.js";
console.log(`Post Length : ${getPostsLength()}`);
console.log(getAllPosts());
