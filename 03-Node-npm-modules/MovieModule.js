//CLASE MOVIE
function Movie () {

  this.attributes = {
    title: ""
  }

  this.observers = new Observer(); 
}


//metodos
Movie.prototype.play= function() {
 this.updateObserver(this.attributes.title + " is playing...");
}

Movie.prototype.stop= function() {    
  this.updateObserver(this.attributes.title + " is stopped");
}

Movie.prototype.set= function(attr, value) {
  this.attributes[attr]=value;
}

Movie.prototype.get= function(attr) {
  var nombre = this.attriubutes[attr];
  console.log(nombre);
}

Movie.prototype.addObserver = function( observer ){
    this.observers.add( observer );
}

Movie.prototype.updateObserver = function (msg){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update(msg);
  }
}

module.exports = Movie;
