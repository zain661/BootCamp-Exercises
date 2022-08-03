// const StringFormatter = function(){

//     const capitalize = function(word){
//       return word[0].toUpperCase() + word.slice(1).toLowerCase()
//     }

//     const skewerCase = function(str){
//       var newStr = str.replace(" ","-")
//        return newStr
//     }


//     return {
//       capitalizeFirst: capitalize , 
//       skewerCase : skewerCase
//     }
// }
// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box

// 

const SongsManager = function(){
  const songs = {
    "sax": "3JZ4pnNtyxQ",
    "how long": "CwfoyVa980U"
  }

  const addSong = function(name,url){
      songs[name] = url.slice(33)
  }
  const getSong = function(name){
      console.log(  "https://www.youtube.com/watch?v=" + songs[name] )
  }

   return{
    addSong , 
    getSong
   }
}

const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ