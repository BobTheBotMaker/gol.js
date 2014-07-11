var assert = require("assert");

describe('Cells', function(){
  var assert = require("assert")
  var Cell = require('../lib/cell.js')
  
  it('Should die if lonely', function(){
    var cell = new Cell('alive');
    var new_cell = cell.tick(1);
    assert.equal(new_cell.state, 'dead');
  })
  
  it('Should stay alive', function(){
    var cell = new Cell('alive');
    var new_cell = cell.tick(2);
    assert.equal(new_cell.state, 'alive');
    
    var new_cell = cell.tick(3);
    assert.equal(new_cell.state, 'alive');    
  })
  
  it('Shold die if over populated', function(){
    var cell = new Cell('alive');
    var new_cell = cell.tick(4);
    assert.equal(new_cell.state, 'dead');    
  })

  it('Shold come alive', function(){
    var cell = new Cell('dead');
    var new_cell = cell.tick(3);
    assert.equal(new_cell.state, 'alive');    
  })
  
  it('Shold stay dead', function(){
    var cell = new Cell('dead');
    var new_cell = cell.tick(2);
    assert.equal(new_cell.state, 'dead');

    var new_cell = cell.tick(4);
    assert.equal(new_cell.state, 'dead');
  })
  
  
})