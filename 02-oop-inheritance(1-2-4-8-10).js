//CLASE MOVIE
var movie = function() {
  //atributos
  attributes = {};
  
  //metodos
  function play() {
    console.log("Playing "+attributes[0].title+"...")
  }

  function stop() {
    console.log(attributes[0].title+" stopped.")
  }

  function set(attr, value) {
    attributes[0]={attr:value};
  }

  function get(attr) {
    var nombre = attriubutes[0].attr;
    console.log(nombre);
  }
}
//CLASE DOWNLOADMOVIE
var DownloadMovie= function(){
  //herencia
    this.prototype=movie;
    this.prototype.constructor=movie;
  //metodos
 function share(user){
   console.log("Sharing "+attributes[0].title+" with "+ user);
   
 }
  
}
//implementacion
var CiudadesDePapel = new movie();
CiudadesDePapel.set("title","ciudades de papel");
CiudadesDePapel.play();

var lordoftherings = new movie();
lordoftherings.set("title","lord of the rings");
lordoftherings.play();

