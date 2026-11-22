function calculateResult(marks){
    if(marks>=50){
        return "Pass";
    }
    else{
        return "Fail";
    }
}

let displayResult = (name,result)=>{
   return name+"-"+result;
};

let learners = [
    {name : "Anu", marks : 75},
    {name : "Rahul",marks : 42},
    {name : "Meena",marks : 68},
    {name : "Arun",marks : 35},
];

for (let details of learners){
    //console.log(calculateResult(details.marks));
   let score= calculateResult(details.marks);
   console.log(displayResult(details.name,score));
}


 


//console.log("anu ",calculateResult(45));