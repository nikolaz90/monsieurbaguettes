
let form = document.getElementById("input-form");
let ansBox = document.getElementById("answer-box");
let counter = 0; 
let counter2 = 0;
let accumulatedSavings = 0;
let accumulatedSavings2 = 0; 
let yearlyAmountsArray = [];
let yearlyAmountsArray2 = [];
let howManyMonths = 0;
let howManyMonths2 = 0;



form.submit.onclick = function(){
      let tar = parseInt(form.target.value);
      let mon = parseInt(form.monthly.value); 
      let int = parseInt(form.interest.value);
      let decimalisedInterest = int/100;
      if(tar>mon && mon>0 && int>=0){
        while (accumulatedSavings<tar){
        let yearlyInput = mon*12;
        accumulatedSavings = accumulatedSavings+yearlyInput;
        accumulatedSavings = accumulatedSavings*(1+decimalisedInterest);
        counter++; 
        yearlyAmountsArray.push(accumulatedSavings);
        }
        howManyMonths = Math.round((tar-(Math.round(yearlyAmountsArray[counter-2])))/mon);
        console.log(yearlyAmountsArray)
        while(accumulatedSavings2<tar){
          let yearlyInput = (mon+100)*12;
          accumulatedSavings2 = accumulatedSavings2+yearlyInput;
          accumulatedSavings2 = accumulatedSavings2*(1+decimalisedInterest);
          counter2++;
          yearlyAmountsArray2.push(accumulatedSavings2);
        }
      howManyMonths2 = Math.round((tar-(Math.round(yearlyAmountsArray2[yearlyAmountsArray2.length-2])))/(mon+100));
      ansBox.style.display = "block";
      console.log("It will take at least " + (counter-1) + " years and " + howManyMonths+ " months to save up to your target.")
      if (howManyMonths<12 && howManyMonths>0 && howManyMonths2<12 && howManyMonths2>0){
        ansBox.innerHTML = "It will take at least " + (counter-1) + " years and " + howManyMonths + " months to save up to your target. And " + (counter2-1) + " years and " + howManyMonths2 + " months if you save an extra $100 a month."
      }else{
        ansBox.innerHTML = "It will take at least " + (counter-1) + " years to save up to your target. And " + (counter2-1) + " years if you save an extra $100 a month. Your interest will be doing well !"
      }
      
    }else{
      ansBox.style.display = "block";
      console.log("Please check your numbers.");
      ansBox.innerHTML = "Please check your numbers.";
    }
}

/*
let array = [];
function calculate(){
  let monthly = parseInt(form.monthly.value);
  let target = parseInt(form.target.value);
  let yearlyInput = month*12;
  let accumulatedSavings = 0; 
  let years = array.length;
  let decimalisedInterest = parseInt(form.interest.value)/100;
  if(target>monthly&&monthly>0){
    while(accumulatedSavings<target){
      accumulatedSavings += yearlyInput;
      accumulatedSavings *= (1*decimalisedInterest);
      array.push(accumulatedSavings);
    }
  }
  console.log(years)
}

form.submit.onclick = function (){
  calculate();
}
*/


