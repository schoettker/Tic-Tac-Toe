// business logic
function Player(mark, score){
  this.mark = mark;
  this.score = score;
};
function Space(x, y, mark){
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
function Game(){

}
