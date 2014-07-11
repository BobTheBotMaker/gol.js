var assert = require("assert");

describe('Cells', function(){
  var assert = require("assert")
  var Cell = require('../lib/cell.js')
  
  it('Should die if lonely', function(){
    var cell = new Cell('alive');
    var new_cell = cell.tick(1);
    assert.equal(new_cell.state, 'dead');
  })
})