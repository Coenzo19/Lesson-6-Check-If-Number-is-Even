import { isEven } from './isEven.js';

process.stdin.on('data', data => {
  const input = Number(data.toString());
  if (isNaN(input)) {
    console.error("Invalid test input. A single number is expected.");
    process.exit(1);
  }
  console.log(isEven(input));
  process.exit();
});