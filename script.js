let bill=document.getElementById('bill');
const five=document.getElementById('five');
const ten=document.getElementById('ten');
const fifteen=document.getElementById('fifteen');
const twentyFive=document.getElementById('twenty-five');
const fifty=document.getElementById('fifty');
let myValue=document.getElementById('myValue');
let people=document.getElementById('people');
const button=document.getElementById('reset-btn');
const error = document.querySelector('.error')
const tippercentage= document.getElementById('tippercentage');
const amountPerHead= document.getElementById('amountPerHead');


let  billValue ;
let peopleValue;
let value;
let customValue=0;


bill.addEventListener('input',getBillValue);
people.addEventListener('input',getPeopleValue);

five.addEventListener('click',getValueFive);
ten.addEventListener('click',getValueTen);
fifteen.addEventListener('click',getValueFifteen);
twentyFive.addEventListener('click',getValueTwentyFive);
fifty.addEventListener('click',getValueFifty);
myValue.addEventListener('click',getCustomValue);


function getBillValue(){
   let inputValue = bill.value;
     billValue = inputValue.replace( /[^\d+(\.\d+)]?$/g, '');
     bill.value = billValue;
}

 
function getValueFive(){
  value=(five.value)
}
function getValueTen(){
  value=(ten.value)
}
function getValueFifteen(){
  value=(fifteen.value)
}
function getValueTwentyFive(){
  value=(twentyFive.value)
}
function getValueFifty(){
  value=(fifty.value)
}
function getCustomValue(){
  let getValue = myValue.value;
  customValue = getValue.replace( /[^\d+]?$/g, '');
  myValue.value = customValue;

}

function getPeopleValue(){
  let getValue = people.value;
  peopleValue = getValue.replace( /[^\d+]?$/g, '');
  people.value = peopleValue;

}



button.addEventListener('click',function(e){

const amountOfBill= parseFloat(bill.value);
const numberOfPeople=parseFloat(people.value);
const customAmount=parseInt(myValue.value,10);
const buttonValue= parseInt(value);
let tipAmount=0;
let amount=0;
let totalAmount=0;

if((bill.value==='') && (value===undefined || myValue.value==='')){
 e.preventDefault();
}
else if(people.value===''&& bill.value!==''){
error.innerHTML="Can,t be zero"  
tippercentage.innerHTML= '$0.00';
amountPerHead.innerHTML='&0.00';
} 
else if((amountOfBill!==0&&numberOfPeople!==0)){

  if((value===undefined && myValue.value==='')){
     amount= amountOfBill;
    totalAmount= amount/numberOfPeople;
    tippercentage.innerHTML= "$"+"0.00";
    amountPerHead.innerHTML="$"+totalAmount.toFixed(2);
    error.innerHTML=""  
  }else{
    tipAmount= amountOfBill*(customAmount || value)/100;
    amount= (amountOfBill+tipAmount);
    totalAmount= amount/numberOfPeople;
    tippercentage.innerHTML= "$"+tipAmount;
    amountPerHead.innerHTML="$"+totalAmount.toFixed(2);
    error.innerHTML=""  
  }
}
})

button.addEventListener('dblclick',function(){

tippercentage.innerHTML= '$0.00';
amountPerHead.innerHTML='&0.00';
})

