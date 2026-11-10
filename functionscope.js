//Global Scope ->outside block/function
//function -> inside the function/block
//block -> inside the block declared

//Global Scope :
/*let name = "swathi"
function displayname(){
    console.log(name);
}
displayname();
console.log(name);*/

//functionscope :
/*function showdetails(){
    let name ="anu";
    let age = 20;
    console.log(name);
    console.log(age);
}
showdetails();
console.log(name);
console.log(age);*/

//Block Scope :
if (true){
    let age = 25;
    const name ="anju";
    var city ="kochi";
    console.log(age);
    console.log(name);
    console.log(city);

}
console.log(age);
