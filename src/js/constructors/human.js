let Human = function (x) {
  x = x || {};
this.cool= (x.cool!==undefined)? x.cool : false;

// if(x.cool !== undefined){
//   return x.cool
// }else{
//   return false;
// }
this.feed = function(x){
    x.hungry=false;
  }
  this.pet =function (petObj){
    petObj.status = 'happy';
  }
}
export default Human;
