module.exports = (function() {
  
  var _ = require("underscore");
  var Rules = require("../lib/rules.js");
  var rules = new Rules().rules;
  
  var Cell = function(state) {
    var _state = state;
    
    var my_rules = _.filter(rules, function(r){
      return(r.initial == _state)
    });
    
    var tick = function(living_neighbors) {
      next_state = _.find(my_rules, function(r){
        return(r.condition(living_neighbors));
      });
    }
    
  }
})();