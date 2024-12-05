// code your solution here
function superbowlWin(arr) {
    const win= arr.find(arr => arr.result === "W")
    return win ? win.year : undefined;
}
const arr = [
    { year: "2018", result: "L" },
    { year: "2019", result: "W" },
    { year: "2020", result: "L" },
];

console.log(superbowlWin(arr)); 
console.log(superbowlWin([])); 
