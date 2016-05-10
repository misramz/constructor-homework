let Dog = function (x) {

  x = x || {};
  this.status = x.status || 'normal';
  this.color = x.color;
  this.hungry = (x.hungry!==undefined)?x.hungry : true;
  // this.hungry = (x.hungry === undefined)? : true;

}
export default Dog;
