// // //request the data with a GET request
// // $.get("https://jsonplaceholder.typicode.com/users", function(users){
// //   //extract the geo data of the first user

// //   let lat = users[users.length-1].company.catchPhrase
  
  
// //   console.log(`${lat}`) //prints -37.3159, 81.1496
// // })

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
//   })

//   const useData = function(data){
//     console.log(data);
//   }

// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }); 
// }
 
// fetch("title", "The Wise Man's Fears")
// fetch("isbn", 9789814561778)

// const fetch = function () {
//     $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu", function (gifs) {
//         console.log(gifs.data[0].embed_url)
//         $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
//     })
// }

// fetch()
const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach(b => console.log(`Title: ${b.volumeInfo.title}, Author: ${b.volumeInfo.authors}, ISBN: ${b.volumeInfo.industryIdentifiers[0].identifier}`))
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}



$.get("https://www.google.com", function(result){
    console.log(result)
})
  
fetch("title", "The Wise Man's Fears")