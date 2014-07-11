module.exports = (function() {
  
  var _ = require("underscore");
  var Rules = require("../lib/rules.js");
  var rules = new Rules().rules;
  
  var Cell = function(state) {
    this.state = state;
    
    var get_rules = function(){
      r = _.filter(rules, function(r){
        return(r.initial == this.state)
      });
      
      return r;
    }
    
    this.tick = function(living_neighbors) {
      my_rules = get_rules();
      next_state = _.find(my_rules, function(r){
        return(r.condition(living_neighbors));
      });
    }
    
  }
  
  return Cell;
  
})();