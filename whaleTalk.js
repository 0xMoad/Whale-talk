const input = "turpentine and turtles"

const vowels = ["a","e","i","o","u"]

let resultArray = []

for(let i = 0; i < input.length; i++){
  if(input[i] === "e"){
    resultArray.push(input[i])
  };
   if(input[i] === "u"){
    resultArray.push(input[i])
  };
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      console.log("A match! " + input[i] + " // " + vowels[j])
      resultArray.push(input[i], vowels[j])
    }
  }
}



resultArray = resultArray.map(function(x){ return x.toUpperCase(); })

console.log(resultArray.join(""))


