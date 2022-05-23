const arg = process.argv.slice(2);
let inputs = arg.map(function (x) {
  return parseInt(x)
})
const seconds = inputs * 1000;

//function that takes command line arguments a seconds
for (const input of inputs) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, seconds);
};








