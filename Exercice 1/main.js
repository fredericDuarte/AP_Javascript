let hello ="Hello";
let world = 'world';

let final = `${hello} ${world}`;
console.log(final);

let Number ='45.78';

console.log(parseFloat(Number));
console.log(typeof(Number));

let numb = 1;
let numb2 = 4;
let finals = numb / numb2 ;
console.log(Math.round(finals * 100) / 100 );
console.log(parseFloat(finals.toFixed(2)) );

console.log(numb == numb2);  //false
console.log(numb !== numb2);  //true
console.log(numb != numb2);    //true
console.log(numb === numb2); //false

let heure = 12;

let test = (heure <=18) ? "Bonjour" : "bonsoir";
console.log(test);

const array = ['toto','tati','jiji'];

 for(let i=0; i < array.length; i++)
 {
     const elem = array[i];
 }

array.push();
array.pop();
console.log(array.slice(0,2));

let multiply = (x,y) => {
    return x * y ;
};

console.log( multiply(1,2));

/*
let testPromise = (x = new Promise((res, rej)=>{
    if(true) {
        res();
    }
}));
*/
/***************************************************************/
let multiply2 = (x,y,cb) => {
    let test = x * y * 2 ;
    cb(test);
};

multiply2(1,2, (sum)=> {  
    console.log(sum);
});
/***************************************************************/
let getData = ( url, cb) => {
  setTimeout( () => { 
      console.log('--> data is here');
      let data = 'data';
      cb(data);
  },3000); 
};

let displayData = (data) => {
    console.log('--> display data done');
};

let url = 'gvsgrgrdfg';

getData(url , (data) => {
    console.log('---->', data);
    displayData();
    
});
/***************************************************************/
function fn1()
{
    
}


