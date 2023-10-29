//const countvalue = document.querySelector('#counter');
const countvalue= document.getElementById('counter');
// const increment = () => {
//     let value = parseInt(countvalue.innertext);
//     value=value+1;
//     countvalue.innertext = value;
// };
// const decrement = () =>  {
//     let value = parseInt(countvalue.innertext);
//     value=value-1;
//     countvalue.innertext =value;
// };
function increment(){
    let value = parseInt(countvalue.innerText);
    value = value + 1 ;
    countvalue.innerText = value; 
    console.log(value);
};

function decrement() {
    let value = parseInt(countvalue.innerText);
    value = value - 1 ;
    countvalue.innerText = value ;
    console.log(value);
};