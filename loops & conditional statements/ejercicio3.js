/* Write a JavaScript for loop that will iterate from 2 to 21.
 For each iteration, it will check if the current number is odd or even,
 and display a message to the screen */

for (let x=2; x<=21; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

/*
function count(x) {
    var numbers = [];
    if (x % 2 == 0) {
      for (var i=0; i<x; i += 2) {
        numbers.push(i);
      }
    } else {
      for (var i=1; i<x; i += 2) {
        numbers.push(i);
      }
    }
    return numbers;
  }
  */

 function four_digit_armstrong_number() 
 {
  for (var i = 1; i < 10; ++i) {
    for (var j = 0; j < 10; ++j) {
         for (var k = 0; k < 10; ++k){
            for (var l = 0; k < 10; ++l){  
            var pow = (Math.pow(i,4) + Math.pow(j,4) + Math.pow(k,4) + Math.pow(l,4));
            var plus = (i * 1000 + j * 100 +  k * 10 + l);
            if (pow == plus) {     
              console.log(pow);
             }
            }
          }
        }
     }
   }
 four_digit_armstrong_number();

 function a(digito) {
 let num = 0;
 let originalNum = 0;
 let remainder = 0;
 let n = 0;
    let result = 0.0;
    num = digito;
    originalNum = num;

    while (originalNum != 0) {
        originalNum /= 10;
        ++n;
    }
     originalNum = num;
    while (originalNum != 0) {
        remainder = originalNum % 10;
        result += Math.pow(remainder, n);
        originalNum /= 10;
    }

    if (result === num){
        console.log("%d is an Armstrong number.", num);
    } else {
        console.log("%d is not an Armstrong number.", num);
    }
    return 0;
}
a(1634);

///////////////////////////////////////////////////

var chr = "";
for (i = 0; i < 5; i++) {
chr = chr + " *";
console.log(chr);
}


var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}