//CLASE MOVIE
function Movie () {

  this.attributes = {
    title: ""
  }
}


//metodos
Movie.prototype.play= function() {
 console.log(this.attributes.title + " is playing...");
}

Movie.prototype.stop= function() {    
 console.log(this.attributes.title + " is stopped");
}

Movie.prototype.set= function(attr, value) {
  this.attributes[attr]=value;
}

Movie.prototype.get= function(attr) {
  var nombre = this.attriubutes[attr];
  console.log(nombre);
}

}

module.exports = Movie;
