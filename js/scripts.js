// business logic
var fields = [];
function Player(mark, score){
  this.mark = mark;
  this.score = score;
};
function Field(x, y, mark){
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.mark = mark;
};
function Board(){

};
Board.prototype.findField = function (x, y) {
  fields.forEach(function(field){
    if (field.xCoordinate === x && field.yCoordinate === y){
      return field;
    }
  })
};
Board.prototype.spawnFields = function () {
  // bottom row y = 0
  for (var i = 0; i < 3; i++) {
    var newField = new Field(i ,0);
    fields.push(newField);
    };
  // middle row y = 1
  for (var i = 0; i < 3; i++) {
    var newField = new Field(i ,1);
    fields.push(newField);
    };
  // top row y = 2
  for (var i = 0; i < 3; i++) {
    var newField = new Field(i ,2);
    fields.push(newField);
    };
  };
function Game(){

};
