// window.onload = () => {
//     let values1 = document.querySelector("#print");
//     values1.addEventListener("calculate", calculate);
// };




function calculate()
{
let values = document.getElementById('seefizzbuzz').value
    
console.log(values)
// var status = document.getElementById('status')

if (values%15 === 0)
document.getElementById('answer').innerHTML +="<h4>FizzBuzz</h4>"
else if (values%3 === 0)
document.getElementById('answer').innerHTML +="<h4>Fizz</h4>"
else if(values%5 === 0)
document.getElementById('answer').innerHTML += "<h4>Buzz</h4>"
else
document.getElementById('answer').innerHTML += "not divisible by 3,5 and 15"
return false
}
