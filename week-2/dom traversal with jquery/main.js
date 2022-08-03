$(".validator").click(function(){
 const gen = $(this).closest(".computer").find(".generator").text();
 const mb = $(this).closest(".computer").find(".MB").text();
 const q1 = $(this).closest(".computer").find(".QR:first-child").text();
 const q2 = $(this).closest(".computer").find(".QR:nth-child(2)").text();
 console.log(`text : ${gen}\n MB: ${mb}\n QR 1: ${q1}\n QR 2: ${q2}`)
})