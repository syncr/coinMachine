
//global variables required by both jQuery and changeMaker function
var coinValues = [25, 10, 5, 1];
var coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];  

function changeMaker(change) {
  var numberOfEachCoin = [0,0,0,0];
  var userChange =[];
  var i=0;
  
  coinValues.forEach(function(coinValue){
    numberOfEachCoin[i] = Math.floor(change/coinValues[i]);
    change = change%coinValues[i];
    userChange[i] =+ numberOfEachCoin[i] +" "+ coinage[i];
    i++;
  });

  var totalChange = userChange.join(", ");
  return totalChange;
};

//Jquery to perform array manipulation based on UI selector values
$(document).ready(function(){
  $('select[name=missingCoinSelector]').change(function () {
    if ($(this).val() === 'Quarters') {
      coinValues = [25, 10, 5, 1];
      coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];
      coinValues.splice(0,1);
      coinage.splice(0,1);

    } else if ($(this).val() === 'Dimes') {
      coinValues = [25, 10, 5, 1];
      coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];
      coinValues.splice(1,1);
      coinage.splice(1,1);

    } else if ($(this).val() === 'Nickels') {
      coinValues = [25, 10, 5, 1];
      coinage = ['quarter(s)','dime(s)','nickel(s)','penny(s)'];
      coinValues.splice(2,1);
      coinage.splice(2,1);

    } else return;
  });
})

//jquery of web interaction
$(document).ready(function(){
  $('form#coinCounter').submit(function(event){
    var change =$('#userChange').val();
    var moneyBack =changeMaker(change);
    $('.moneyBack').text(moneyBack);
    $('#result').show(400);
    event.preventDefault();
  });

  $('select[name=coinMissing]').change(function () {
    if ($(this).val() === 'Yes') {
      $('#missingCoinSelector').show(400);
    } else {
      $('#missingCoinSelector').hide(400);
    }
  });
  event.preventDefault();
});
