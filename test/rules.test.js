var assert = require("assert");
var _ = require("underscore");

describe('Rules', function(){

  it('Should find a rule', function(){
    var Rules = require("../lib/rules.js");
    var rules = new Rules().rules;

    console.log(rules);
    
    x = _.filter(rules, function(r){
      return(r.initial == "alive")
    });
    
    
    console.log(x);
    
    for(var rule in rules){
      console.log(rules[rule].condition());
    }

  })

})