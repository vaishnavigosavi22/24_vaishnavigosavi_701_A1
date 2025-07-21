// Using __dirname and __filename (file and directory path of current module)
console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

// Using global object (global is like window in browser)
global.myGlobalVar = 'This is a global variable';
console.log('Access global variable:', global.myGlobalVar);

// Using process object (info about the Node.js process)
console.log('Process PID:', process.pid);
console.log('Process platform:', process.platform);
console.log('Process argv:', process.argv);

// Using setTimeout and clearTimeout (timers)
const timeoutId = setTimeout(() => {
  console.log('Timeout executed after 2 seconds');
}, 2000);

clearTimeout(timeoutId); // Cancel the timeout, so nothing will print

// Using console (global console object)
console.log('This is a console log');

// Using Buffer (global class for handling binary data)
const buf = Buffer.from('Hello Q10');
console.log('Buffer contents:', buf.toString());
