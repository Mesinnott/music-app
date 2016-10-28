
function AppController(){

    var myTunes= new MyTunes()


    function drawMySongs(songList){
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
        <button class='moveUp faButton' type='button' id='${song.trackId}'><i class= 'moveUp fa fa-hand-o-up fa-2x'></i></button>
        
        
        
         <button class="playSong faHead" id="${song.preview}"><i class= "fa fa-play-circle fa-2x" aria-hidden="true"></i></button>
        
        <button class='moveDown faButton' type='button' id='${song.trackId}' name='moveDown'><i class= 'moveDown fa fa-hand-o-down fa-2x'></i></button>
        <button class='button btn-danger delete faButton' type='button' id='${song.trackId}'><i class='delete fa fa-trash-o fa-2x'></i></button>
        </div>
        </div>
     </div>
     </div>
     </div>
`
//         <i class= "fa fa-play-circle fa-2x" aria-hidden="true" onmouseover= 'document.getElementById("${songId}").load(); document.getElementById("${songId}").play()' onmouseout= 'document.getElementById("${songId}").pause();'></i>
// onmouseover= 'document.getElementById("${songId}").load(); document.getElementById("${songId}").play()' onmouseout= 'document.getElementById("${songId}").pause();'></i>
//  onmouseover= 'document.getElementById("${songId}").load(); document.getElementById("${songId}").play()' onmouseout= 'document.getElementById("${songId}").pause();'></i>
songId--
  }    
    songElem.innerHTML = '<h1 class=title> MYLIST </h1>'+ template
    songCount.innerHTML = `Tracks Showing: ${songList.length}`
}



    $('#song-list').on('click','button.addTrack', function(event){
        event.preventDefault()
        console.log(event.target.id)
        myTunes.addTrack(this.id)
    })

    $('#clearMyList').on('click', function(){
        myTunes.clearList()
        var songElem = document.getElementById('song-list')
        var songCount = document.getElementById('track-count')
        songElem.innerHTML = '<h1 class=title> MY PLAY LIST </h1>'
        songCount.innerHTML = 'Tracks Showing: 0'
        
    })

var x
    $('#showMySongs').on('click', function(){

        var tempList = myTunes.getTracks()
        x = tempList
        console.log(tempList)
        drawMySongs(tempList)
    })

    $('#song-list').on('click', 'button.moveUp', function(event){
        event.preventDefault()
        myTunes.promoteTrack(this.id)
        var tempList =myTunes.getTracks()
        drawMySongs(tempList)
    })

    $('#song-list').on('click', 'button.moveDown', function(event){
        myTunes.demoteTrack(this.id)
        var tempList = myTunes.getTracks()
        drawMySongs(tempList)
    })

    $('#song-list').on('click', 'button.delete', function(event){
        myTunes.removeTrack(this.id)
        var tempList = myTunes.getTracks()
        drawMySongs(tempList)
    })

    $('#song-list').on('mouseenter', 'button.playSong', function(event){
        var songNow = {}
        songNow.preview = this.id
        myTunes.playSong(songNow)
    })

    $('#playEntireList').on('click', function(){
        debugger

        myTunes.playEntireList(3)
    })

    $('#stopPlay').on('click', function(){
        debugger
        myTunes.stopPlaying()
    })
   

}

AppController()