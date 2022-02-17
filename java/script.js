const btnCalculate = document.getElementById('calculate');
const incomeInput = document.getElementById('income-input');
const foodInput = document.getElementById('food-input');
const rentInput = document.getElementById('rent-input');
const clothesInput = document.getElementById('clothes-input');
const totoalExprese = document.getElementById('totoal-exprese');
const balance = document.getElementById('balance');
const latestMoney = document.getElementById ('latest-money');
const Percentage = document.getElementById('Percentage');
const saveButton = document.getElementById('save-money');
const saveAmount = document.getElementById('save-amount');
const Remaining = document.getElementById('rem-balance');
const allInput = parseInt(document.querySelectorAll('input'));


btnCalculate.addEventListener('click',calculateHandler); 


function calculateHandler() {

   // console.log("hello");
    const foodBalance = parseInt(foodInput.value);
    const rentBalance = parseInt(rentInput.value); value
    const clothseBalance = parseInt(clothesInput.value); 
    const myIncome = parseInt(income.value); 

    const totoalExpreseBalance = foodBalance + rentBalance + clothseBalance ; 
   
  totoalExprese.innerText = totoalExpreseBalance; 
     const newBalance = myIncome  - totoalExpreseBalance ; 
    balance.innerText = totoalExpreseBalance; 
    
   return newBalance; 
   

}


save.addEventListener('click', saveMoney);     

function saveMoney(){
 

    const myIncome = parseInt(income.value);
    const numpersent = parseInt(persent.value);
   
    
   let persentage = myIncome / 100 ; 

    const finulSaveAmmount =  persentage * numpersent ;

    

   if (finulSaveAmmount <= calculateHandler()) {
        saveAmount.innerText = finulSaveAmmount;

        Remaining.innerText = calculateHandler() - finulSaveAmmount;
   }
   else{
       alert('apnar account e porjapto poriman balance nai')
    }

}