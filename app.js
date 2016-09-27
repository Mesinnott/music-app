//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  var template =[]
  var songElem = document.getElementById('song-list')
  for (var i = 0; i < songList.length; i++) {
    var song = songList[i]  
    var title = song.title
    var artist = song.artist
    var price = song.price
    var album = song.collection
    template += `<li> Title: ${title}  Artist: ${artist} Album: ${album}  Price: ${price}</li>`  
  }    
    songElem.innerHTML = template
  console.log(songList);
}



    // var songElem = document.getElementById('comics')
//     for (var i = 0; i < arr.length; i++) {
//       var comic =arr[i]
//       var title = comic.title
//       template +=`<div id="comics">
//   <div class = 'comic'>
//     <div class = 'img-container'>
//       <img src= "${comic.url}" alt="" />
//     </div>
//     <div class = 'text-container'>
//       <h1>${comic.title}</h1>
//       <h2>${comic.date}</h2>
//       <a href= ${comic.link} target="_Blank">Buy NOW !!</a>
//     </div>
//   </div>
// </div>`
//     }
//       comicElem.innerHTML = template
//   }
  
// toScreen(comics)