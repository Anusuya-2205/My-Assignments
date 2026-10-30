//find odd or even number(with zero and negative numbers)
var num = 6;
if (inputValue === 0){
   console.log("the num is zero");
}

else if(inputValue > 0 && inputValue %2 === 0){
   console.log("positive even number");
}

else if(inputValue > 0 && inputValue %2 !== 0){
   console.log("positive odd number");
}

else if(inputValue < 0 && inputValue %2 === 0){
   console.log("negative even number");
}

else{
   console.log("negative odd number");
}