function MyTunes(){

    var myTracks = loadTracks();

    this.getTracks = function(){
    return myTracks.myMusic
    }

    this.addTrack = function(id){
        this.getTracks()     
        for (var i=0; i<songSearchList.length; i++){
            if (songSearchList[i].trackId == id){
                this.getTracks().push(songSearchList[i])
            }
            saveTracks()
        }
    }


    this.clearList = function(){
        this.getTracks().length=0;
        saveTracks()
    }


    this.removeTrack = function(id){
        var remove = this.getTracks()
        for(var i=0; i<remove.length; i++){
            if(remove[i].trackId == id){
                remove.splice(i,1)
            }
        }saveTracks()

    }

    this.promoteTrack = function(id){
        var upList = this.getTracks()
        for(var i=0; i<upList.length; i++){
            if(upList[i].trackId == id){
            var holder= upList.splice(i,1)
            upList.splice((i-1), 0, holder[0])
                }
        }
         saveTracks()
        
    }

    this.demoteTrack = function(id){
        var downList = this.getTracks()
        for(var i=0; i<downList.length; i++){
            if(downList[i].trackId == id){
                var holder =downList.splice(i,1)
                downList.splice((i+1), 0, holder[0])
                saveTracks()
                return
            }
        }
    }






    function saveTracks(){
        // this.getTracks()
        localStorage.setItem('killerList', JSON.stringify(myTracks))
    }


    function loadTracks (){
        var p = localStorage.getItem('killerList')
        if(p){
            p = JSON.parse(p)
            } else {
                p = {
                    myMusic:[]
                }
    } return p
    }
}