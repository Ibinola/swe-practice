const arr = [
    { name: "Suzanne" },
    { name: "Jim" },
    { name: "Trevor" },
    { name: "Amanda" }
];

arr.sort(); // arr unchanged

arr.sort((a, b) => a.name > b.name); // arr sorted alphabetically


// by name property
arr.sort((a, b) => a.name[1] < b.name[1]);

console.log(arr);