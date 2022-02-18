



const btnCalculate = document.getElementById('calculate');
const income = document.getElementById('input-income');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const clothes = document.getElementById('clothes-input');
const totoalExprese = document.getElementById('totoal-exprese');
const balance = document.getElementById('balance');
const remBalance = document.getElementById ('rem-balance');
const persent = document.getElementById('Percentage');
const save = document.getElementById('save-money');
const saveAmount = document.getElementById('save-amount');
const Remaining = document.getElementById('rem-balance');
const allInput = parseInt(document.querySelectorAll('input'));



btnCalculate.addEventListener('click',calculateHandler); 




function calculateHandler() {

    
   const spendForFood = parseInt(food.value);
   const spendForRent = parseInt(rent.value); 
   const spendForClothse = parseInt(clothes.value);
   const myIncome = parseInt(income.value); 

   

    const totoalSpend = spendForFood + spendForClothse + spendForRent ; 

    totoalExprese.innerText = totoalSpend; 

    const newBalance = myIncome  - totoalSpend ; 
    balance.innerText = newBalance; 
    
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
