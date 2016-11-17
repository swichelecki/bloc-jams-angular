(function() {
    function AlbumCtrl(Fixtures) {
        
        this.albumData = Fixtures.getAlbum();
        //console.log(this.albumData);
        //this.albumData = {};
        
     /*   this.albumTitle = albumData.title;
        //console.log(albumData.title);
        this.albumArtist = albumData.artist;
        this.albumLabel = albumData.label;
        this.albumYear = albumData.year;
        this.albumCover = albumData.albumArtUrl; */
        
        //this.albumData = [];
        //this.songs = [];
        
          //  for (var i = 0; i < this.albumData.songs.length; i++) {
        
              // this.songs.push(this.albumData.songs[i]);  
                //this.albumData.push(albumPicasso.songs[i]);    
        
          //  } 
        
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
    
})();