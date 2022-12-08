const assert = require('assert');

import {name} from './index';

describe("greet function", () => {
  it("should take several situations into account, greeting Eliza, Marcus, throwing an error if name is empty, and plural greetings", () => {
    // arrange
    const greeter = require('./index.js');
    
    // act
    const actualResult = greeter.greet('Marcus');
    //eliza
    const ElizaResult = greeter.greet('Eliza');
    //empty
    const EmptyResult = greeter.greet(' ');
    //group 
    const GroupResult = greeter.greet('Marcus and Eliza');
    // assert
    

    switch(name) {
    case 'Marcus':
    assert.equal('Welcome to SALT, Marcus', actualResult);
    break;
    case 'Eliza':
     assert.equal('Welcome to SALT, Eliza', ElizaResult);
     break;
    case ' ':
    assert.equal('Welcome to SALT,  ', EmptyResult, "You can't do that!");
    break;
    case'Marcus and Eliza':
    assert.equal('Welcome to SALT, Marcus and Eliza', GroupResult);
    break;
  }
    
  });
});
