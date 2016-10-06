//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

var songSearchList =[]

function drawSongs(songList){
  var template = ''
  var songElem = document.getElementById('song-list')
  var songCount = document.getElementById('track-count')
  var songId = songList.length
  for (var i = 0; i < songList.length; i++) {
    var song = songList[i]   
template +=
  `<div class = 'col-xs-12 col-md-6' >
  <div class= 'song'>
  <div class = 'picName-container'>
     <div class = 'img-container pic-container'>
       <img class='img-rounded' src= "${song.albumArt}" alt="" />
     </div>
    <div class = 'img-container title-container'>
       <h3> ${song.title}</h3>
    </div>
    </div>
    <div class = 'player-container'>
    <audio id='${songId}' preload='none'>
    <source src ='${song.preview}' type='audio/aac'>
    </audio>
    </div>
    <div class ='extra-container'>
        <h4>By ${song.artist} || ${song.collection} || ${song.price}  </h4>
        <div class = 'button-container'>
        
        <button class= 'addTrack faButton' type='button' id=${song.trackId} name='addTrack'><i class= "addTrack fa fa-plus-circle fa-2x"></i></button>
        <i class= "fa fa-play-circle fa-2x" aria-hidden="true" onmouseover= 'document.getElementById("${songId}").load(); document.getElementById("${songId}").play()' onmouseout= 'document.getElementById("${songId}").pause();'></i>
        </div>
        </div>
     </div>
     </div>
     </div>
`
songId--
  }    
    songElem.innerHTML = template
    songCount.innerHTML = `Tracks Showing: ${songList.length}`
   songSearchList = songList
}



