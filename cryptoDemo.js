import crypto, { Decipher } from "crypto";

//reate HAsh
const hash = crypto.createHash("sha256");

hash.update("password1223");
// console.log(hash.digest("hex"));

// 11c83cee4eb4d5764e02140fdfeaaeac303e885dd81140f3a6a1dbbd937b94c5

//RandomBytes
crypto.randomBytes(16, (er, bf) => {
  if (er) throw err;
  // console.log(bf.toString("hex"));
});
// de98b0cecee3fb3a78c67bfa662b4f39

//Encryption and dcryption - cipher text
// createcipheriv & createDecypheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(
  "Hello this is secret message from BM Patil..",
  "utf8",
  "hex"
);

encrypted += cipher.final("hex");
console.log("Encrypted data : ", encrypted);

const deCypher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = deCypher.update(encrypted, "hex", "utf-8");
decrypted += deCypher.final("utf8");
console.log("De Crypted Data : ", decrypted);
