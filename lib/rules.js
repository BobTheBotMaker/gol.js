module.exports = (function(){
  var Rules = function() {
    
    var lonely = function(n){ return (n < 2); }
    var stay_alive = function(n){ return ((n == 2) || (n == 3)); }
    var over_population = function(n){ return (n > 3); }
    var generate = function(n){ return (n == 3); }
    
    this.rules = [
                  {initial: "alive", final: "dead",  condition: lonely},
                  {initial: "alive", final: "alive", condition: stay_alive},
                  {initial: "alive", final: "dead",  condition: over_population},
                  {initial: "dead",  final: "alive", condition: generate}];
  }
  return Rules;
})();