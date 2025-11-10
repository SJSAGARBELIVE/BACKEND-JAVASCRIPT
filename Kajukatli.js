import promptSync from "prompt-sync";
const prompt = promptSync();

let n = Number(prompt("Enter your num: "));

for (let i = 1; i <= (n * 2) - 1; i++) {
  const stars = (i <= n) ? (2 * i - 1) : (2 * ((2 * n) - i) - 1);
  const spaces = (i <= n) ? (n - i) : (i - n);

  let line = "";
  for (let j = 1; j <= spaces; j++) {
    line += " ";
  }
  for (let j = 1; j <= stars; j++) {
    line += "*";
  }
  console.log(line);
}
4