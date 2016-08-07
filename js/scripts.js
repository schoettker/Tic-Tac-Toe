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
  // top row y = 2
  $(".board").append("<div class='row top'></div>")
  for (var i = 0; i < 3; i++) {
    var newField = new Field(i ,2);
    fields.push(newField);
    $(".top").append("<div class='square'></div>")
    };
  // middle row y = 1
  $(".board").append("<div class='row middle'></div>")
  for (var i = 0; i < 3; i++) {
    var newField = new Field(i ,1);
    fields.push(newField);
    $(".middle").append("<div class='square'></div>")
    };
  // bottom row y = 0
  $(".board").append("<div class='row bottom'></div>")
  for (var i = 0; i < 3; i++) {
    var newField = new Field(i ,0);
    fields.push(newField);
    $(".bottom").append("<div class='square'></div>")
    };
  };
function Game(){

};
$(document).ready(function(){
  var board = new Board();
  board.spawnFields();
  $(".square").eq(0).css("background-color","red");
});
