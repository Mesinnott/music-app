function MyTunes() {

    var myTracks = loadTracks();

    this.getTracks = function () {
        return myTracks.myMusic
    }

    this.addTrack = function (id) {
        this.getTracks()
        for (var i = 0; i < songSearchList.length; i++) {
            if (songSearchList[i].trackId == id) {
                this.getTracks().push(songSearchList[i])
            }
            saveTracks()
        }
    }


    this.clearList = function () {
        this.getTracks().length = 0;
        saveTracks()
    }


    this.removeTrack = function (id) {
        var remove = this.getTracks()
        for (var i = 0; i < remove.length; i++) {
            if (remove[i].trackId == id) {
                remove.splice(i, 1)
            }
        } saveTracks()

    }

    this.promoteTrack = function (id) {
        var upList = this.getTracks()
        for (var i = 0; i < upList.length; i++) {
            if (upList[i].trackId == id) {
                var holder = upList.splice(i, 1)
                upList.splice((i - 1), 0, holder[0])
            }
        }
        saveTracks()

    }

    this.demoteTrack = function (id) {
        var downList = this.getTracks()
        for (var i = 0; i < downList.length; i++) {
            if (downList[i].trackId == id) {
                var holder = downList.splice(i, 1)
                downList.splice((i + 1), 0, holder[0])
                saveTracks()
                return
            }
        }
    }

    var playing;
    var playlist = []
    var songElem = document.getElementById('currently-playing')
    function playNext(){
        playlist.push(playlist.shift())
        play()
    }
    function play() {
        songElem.pause()
        if (songElem && playlist.length > 1) {
            songElem.src = playlist[0].preview
            songElem.currentTime = 0;
            songElem.play()
            songElem.onended = playNext
        }else if (songElem && playlist.length > 0) {
            songElem.src = playlist[0].preview
            songElem.currentTime = 0;
            songElem.play()
        }
        
    }

    this.playSong = function(song){
       playlist = []
       playlist.push(song)
       play();
    }


    this.stopPlaying = function(){
        songElem.pause()
    }

    // function stopPlaylist(){
    //    songElem.pause()
    //     // playlist = []
    //     // play();
    // }
    // this.resume = function(){
    //     play()
    // }
    


    // function addToQueue(i){
    //     playlist.push(i)
    // }

    this.playEntireList = function (list) {
        playlist = myTracks.myMusic
        play();
    }






    function saveTracks() {
        // this.getTracks()
        localStorage.setItem('killerList', JSON.stringify(myTracks))
    }


    function loadTracks() {
        var p = localStorage.getItem('killerList')
        if (p) {
            p = JSON.parse(p)
        } else {
            p = {
                myMusic: []
            }
        } return p
    }
}