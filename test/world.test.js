var assert = require("assert");
var _ = require("underscore");

describe('World', function(){
  it('Should build a world', function(){
    var World = require('../lib/world.js');
    var world = World.fromRand(3);
    
    _.each(world.cells, function(cell){
      console.log(cell.state);
    })
  })
})
 