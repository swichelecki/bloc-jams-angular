(function() {
    function AlbumCtrl() {
        
        this.albumTitle = albumPicasso.title;
        this.albumArtist = albumPicasso.artist;
        this.albumLabel = albumPicasso.label;
        this.albumYear = albumPicasso.year;
        this.albumCover = albumPicasso.albumArtUrl;
        
        this.albumData = [];
        
        for (var i = 0; i < albumPicasso.songs.length; i++) {
        
            this.albumData.push(angular.copy(albumPicasso.songs[i]));    
        
        }
        
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
    
})();