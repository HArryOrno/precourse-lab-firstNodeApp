const assert = require('assert');


describe("greet function", () => {
  it("should take several situations into account, greeting Eliza, Marcus, throwing an error if name is empty, and plural greetings", () => {
    // arrange
    const greeter = require('./index.js');

    // act
    const actualResult = greeter.greet('Marcus');
    //eliza
    const ElizaResult = greeter.greet('Eliza');
    //empty
    const EmptyResult = greeter.greet('');
    //group 
    const GroupResult = greeter.greet('Marcus and Eliza');
    // assert
    if (assert.equal('Welcome to SALT, ', EmptyResult) == true)
    {
      console.log("You can't use an empty field!\a");
    }
    else if (assert.equal('Welcome to SALT, Marcus', actualResult) == true)
    {
      return;
    }
    else if(assert.equal('Welcome to SALT, Eliza', ElizaResult) == true)
    {
      return;
    }
    else 
    {
      assert.equal('Welcome to SALT, Marcus and Eliza', GroupResult);
    }
    
  });
});
