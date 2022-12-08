const assert = require('assert');
const markedName = require('./index.js').name;

describe("greet function", () => {
  it("should greet in an appropriate fashion", () => {
    // arrange
    const greeter = require('./index.js');
    
    // act
    const actualResult = greeter.greet('Marcus');
    //eliza
    const elizaResult = greeter.greet('Eliza');
    //empty
    const emptyResult = greeter.greet('');
    //group 
    const groupResult = greeter.greet('Marcus and Eliza');

    // assert
    
    switch(markedName) {
    case 'Marcus':
      assert.equal('Welcome to SALT, Marcus', actualResult);
      break;
    case 'Eliza':
      assert.equal('Welcome to SALT, Eliza', elizaResult);
      break;
    case '':
      assert.equal('Welcome to SALT, ', emptyResult);
      console.log("Hey, that's empty!");
      break;
    case'Marcus and Eliza':
      assert.equal('Welcome to SALT, Marcus and Eliza', groupResult);
      break;
    default:
      console.log('Nothing tested for written');
      break;
  }

    
  });
});
