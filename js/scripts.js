
//global variables required by both jQuery and changeMaker function
//pass in change, missingCoin;
function changeMaker(change, missingCoin) {
  var coinValues = [25, 10, 5, 1];
  var coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];
  var numberOfEachCoin = [0,0,0,0];
  var userChange =[];
  var i=0;

  if (missingCoin === 0) {
    coinValues.splice(0,1);
    coinage.splice(0,1);
  } else if (missingCoin === 1){
    coinValues.splice(1,1);
    coinage.splice(1,1);
  } else if (missingCoin === 2){
    coinValues.splice(2,1);
    coinage.splice(2,1);
  } 

  coinValues.forEach(function(coinValue){
    numberOfEachCoin[i] = Math.floor(change/coinValues[i]);
    change = change%coinValues[i];
    userChange[i] =+ numberOfEachCoin[i] +" "+ coinage[i];
    i++;
  });

//if else to handle incoming missingCoin value and to splice
//coinValues.splice(missingCoin,1);
  
  console.log(missingCoin);
  var totalChange = userChange.join(", ");
  return totalChange;
}

//Jquery to perform array manipulation based on UI selector values
$(document).ready(function(){
  var missingCoin = -1;
  $('select[name=missingCoinSelector]').change(function () {
    if ($(this).val() === 'Quarters') {
      missingCoin = 0;
      //console.log(missingCoin);
      // coinValues = [25, 10, 5, 1];
      // coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];
      // coinValues.splice(0,1);
      // coinage.splice(0,1);

    } else if ($(this).val() === 'Dimes') {
      missingCoin = 1;
      //console.log(missingCoin);
      // coinValues = [25, 10, 5, 1];
      // coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];
      // coinValues.splice(1,1);
      // coinage.splice(1,1);

    } else if ($(this).val() === 'Nickels') {
      missingCoin = 2;
      //console.log(missingCoin);
      // coinValues = [25, 10, 5, 1];
      // coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];
      // coinValues.splice(2,1);
      // coinage.splice(2,1);

    } else missingCoin = -1;
  }) 
  
  $('form#coinCounter').submit(function(event){
    var change =$('#userChange').val();
    var moneyBack =changeMaker(change,missingCoin); //,missingCoin
    $('.moneyBack').text(moneyBack);
    $('#result').show(400);
    event.preventDefault();

  });

  $('select[name=coinMissing]').change(function () {
    if ($(this).val() === 'Yes') {
      $('#missingCoinSelector').show(400);
    } else {
      $('#missingCoinSelector').hide(400);
      missingCoin=-1;
    }
  });
  return missingCoin;
  event.preventDefault();
});
