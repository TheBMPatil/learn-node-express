import crypto from "crypto";

//reate HAsh
const hash = crypto.createHash("sha256");

hash.update("password1223");
// console.log(hash.digest("hex"));

// 11c83cee4eb4d5764e02140fdfeaaeac303e885dd81140f3a6a1dbbd937b94c5


//RandomBytes
crypto.randomBytes(16, (er, bf) => {
  if (er) throw err;
  console.log(bf.toString("hex"));
});
// de98b0cecee3fb3a78c67bfa662b4f39

