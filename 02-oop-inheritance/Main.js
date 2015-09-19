var CiudadesDePapel = new movie();
var obs=new movieObserver();
var obs2=new movieObserver();
CiudadesDePapel.addObserver(obs);
CiudadesDePapel.addObserver(obs2);
CiudadesDePapel.set("title","ciudades de papel");
CiudadesDePapel.play();
CiudadesDePapel.stop();
