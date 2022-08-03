$("button").click(function(){
    const val = $("input").val()
    $("ul").append(`<li>${val}</li>`)
    $("input").val("")
})

$("ul").on("click", "li", function(){
    $("ul").remove()
})