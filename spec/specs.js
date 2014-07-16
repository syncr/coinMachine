describe ('changeMaker', function() {
  it ('for simple user input, give back all change', function(){
    changeMaker(4).should.equal('0 quarter(s), 0 dime(s), 0 nickel(s), 4 penny(s)');
  });
  it ('should break required change value from cents into coin denominations', function(){
    changeMaker(99).should.equal('3 quarter(s), 2 dime(s), 0 nickel(s), 4 penny(s)');
  });
  it ('changeMaker should accommodate more than 99 cents', function(){
    changeMaker(300).should.equal('12 quarter(s), 0 dime(s), 0 nickel(s), 0 penny(s)');
  });
  it ('when changeMaker has no nickels, return only quarters, dimes, pennys', function(){
    changeMaker(99).should.equal('3 quarter(s), 2 dime(s), 4 penny(s)');
  });
  it ('when changeMaker has no dimes, return only quarters, nickels, pennys', function(){
    changeMaker(99).should.equal('3 quarter(s), 4 nickel(s), 4 penny(s)');
  });
  it ('when changeMaker has no dimes, return only dimes, nickels, pennys', function(){
    changeMaker(99).should.equal('9 dime(s), 1 nickel(s), 4 penny(s)');
  });
});


