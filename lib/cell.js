module.exports = (function() {
  
  var _ = require("underscore");
  var Rules = require("../lib/rules.js");
  var rules = new Rules().rules;
  
  var Cell = function(state) {
    this.state = state;

    var get_rules = function(state){      
      return(_.filter(rules, function(r){
        return(r.initial == state)
      }));      
    }
    
    this.tick = function(living_neighbors) {
      var my_rules = get_rules(this.state);
      next_state = _.find(my_rules, function(r){
        return(r.condition(living_neighbors));
      });     
      return (new Cell(next_state.final));
    }    
  }
  
  return Cell;
  
})();