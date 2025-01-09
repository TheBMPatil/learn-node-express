//argv
// console.log(process.argv);
// console.log(process.argv[3]);

//process.env
console.log("COMPNAME : " + process.env.COMPUTERNAME);
console.log("UserName : " + process.env.USERNAME);
//pid
console.log("PID : " + process.pid);
//current wrkig dir
console.log("CWD :" + process.cwd());

//title
console.log("Process title : " + process.title);
// memoryUsage
console.log("Process Mem usage : ", process.memoryUsage());

//uptime

console.log("Process Up Time : ", process.uptime());

process.on("exit", (code) => {
  console.log(`About to exit with status code : ${code}`);
});

//exit()
// console.log("Process exit : ",
process.exit(0);
console.log("Hello from exit");
