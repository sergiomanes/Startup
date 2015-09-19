function movieObserver(){}

  movieObserver.prototype= new Observer();
  movieObserver.prototype.constructor=movieObserver;

  movieObserver.prototype.update= function(text){
    console.log(text);
    
  }
