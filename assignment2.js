
let students = [
    {name : "John", marks : 85, grade : "A"},
    {name : "David", marks : 72, grade :"B"},
    {name : "Peter", marks : 90, grade : "A+"},
    {name : "Sarah", marks : 65, grade : "C"},

]

/*students.forEach((student)=>{
    console.log(student.name,student.marks,student.grade);
});*/

students.forEach((student)=>{
    console.log(student.name + "-" + student.marks +"-"+student.grade);
});

console.log("--------------------------------");

let details = students.map((studentName)=>{
    return studentName.name;
});
console.log((details));


/*let details = students.map((studentName)=>studentName.name);
console.log(details);*/

console.log("--------------------------------");

let score = students.filter((result)=>{
    return result.marks>=80;
});
console.log(score);