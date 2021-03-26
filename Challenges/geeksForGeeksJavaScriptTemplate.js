process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (stdinStr) => {
    inputString += stdinStr;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => string.trim());
    main();
});

function main() {
    console.log(inputString);
}
