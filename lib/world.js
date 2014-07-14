module.exports = (function(){
  var Cell = require('./cell.js');
  
  var World = function(size){
    this.cells = [];
    this.size = size;
    
    var count_living_neighbors = function(index){
      
    }  
  }
  
  World.fromRand = function(size){
    var world = new World(size);
    var prob = Math.random();
    
    for(var i = 0; i < (size*size); i++){
      if(Math.random() > prob) {
        var cell = new Cell('alive');
      } else {
        var cell = new Cell('dead');
      }
      world.cells.push(cell);
    }
    return (world);
  }
  
  return({ fromRand: World.fromRand});
  
})();