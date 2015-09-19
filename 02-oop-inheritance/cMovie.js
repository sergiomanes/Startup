//CLASE MOVIE
function movie () {
  //atributos
  attributes = {};
  attributes["title"]=" ";
  observers= new movieObserver();
  
  //metodos
  this.play= function() {
   var observerCount = observers.count();
   for(var i=0; i < observerCount; i++){
   observers.get(i).update( attributes["title"].value + " is playing..." );
   }
  }

  this.stop= function() {
    var observerCount = observers.count();
    for(var i=0; i < observerCount; i++){
    observers.get(i).update( attributes["title"].value + " is stopped" );
    }
  }

  this.set= function(attr, value) {
    attributes[attr]={value};
  }

  this.get= function(attr) {
    var nombre = attriubutes[attr];
    console.log(nombre);
  }
  
  this.addObserver = function( observer ){
                    observers.add( observer );
                }
}
