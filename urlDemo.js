import url from "url";

const urlSting = "https://www.google.com/search?q=hello+world";

//url object

const urlObj = new URL(urlSting);

// console.log(urlObj);
// URL {
//     href: 'https://www.google.com/search?q=hello+world',
//     origin: 'https://www.google.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.google.com',
//     hostname: 'www.google.com',
//     port: '',
//     pathname: '/search',
//     search: '?q=hello+world',
//     searchParams: URLSearchParams { 'q' => 'hello world' },
//     hash: ''
//   }

//format()
console.log(url.format(urlObj));
// https://www.google.com/search?q=hello+world

//import.meta.url
console.log(import.meta.url);
// file:///D:/Node%20Exp/node-js-crash/urlDemo.js

//fileUrlTOPath
console.log(url.fileURLToPath(import.meta.url));
// D:\Node Exp\node-js-crash\urlDemo.js

console.log(urlObj.search); //?q=hello+world

const paraam = new URLSearchParams(urlObj.search);
// console.log(paraam);
// URLSearchParams { 'q' => 'hello world' }

console.log(paraam.get("q"));
// hello world
paraam.append("limit", 5);
console.log(paraam);
paraam.delete("limit");
console.log(paraam);
// URLSearchParams { 'q' => 'hello world', 'limit' => '5' }
// URLSearchParams { 'q' => 'hello world' }
