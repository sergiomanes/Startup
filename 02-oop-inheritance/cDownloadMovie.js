//CLASE DOWNLOADMOVIE
    
function DownloadMovie(){}
  //herencia
    DownloadMovie.prototype= new movie();
    DownloadMovie.prototype.constructor=DownloadMovie;
  //metodos
  DownloadMovie.prototype.share= function(user){
   console.log("Sharing "+attributes[title]+" with "+ user);
    }
