import os from "os";
//userInfo()
console.log(os.userInfo());
// [Object: null prototype] {
//     uid: -1,
//     gid: -1,
//     username: 'bhagv',
//     homedir: 'C:\\Users\\bhagv',
//     shell: null
//   }
console.log(os.userInfo().username); //bhagv

//totalmem()
console.log(os.totalmem()); //25621008384
//freemem()
console.log(os.freemem()); //16994238464
//cpus()
console.log(os.cpus());
//  [
//   ({
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 348984, nice: 0, sys: 471562, idle: 2557390, irq: 60921 },
//   },
//   {
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 299843, nice: 0, sys: 250750, idle: 2827265, irq: 26406 },
//   },
//   {
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 473984, nice: 0, sys: 345500, idle: 2558375, irq: 29656 },
//   },
//   {
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 415687, nice: 0, sys: 256437, idle: 2705734, irq: 20437 },
//   },
//   {
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 408109, nice: 0, sys: 354734, idle: 2615015, irq: 30187 },
//   },
//   {
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 295984, nice: 0, sys: 246593, idle: 2835281, irq: 19234 },
//   },
//   {
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 376890, nice: 0, sys: 313265, idle: 2687703, irq: 25296 },
//   },
//   {
//     model: "Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz",
//     speed: 1800,
//     times: { user: 335671, nice: 0, sys: 226312, idle: 2815875, irq: 19109 },
//   }),
// ];


