// Create elements that display bio upon user clicking Biography picture
document.getElementById("contact").addEventListener("click", function () {
    window.location.pathname = "C:/Users/Trace/codeWork/ThatSkiPatroller.github.io-Portfolio/Develop/Contact.html";
});

// document.getElementById("biography").addEventListener("click", function () {
//     var id = null;
//     var can = document.getElementById("biography");
//     clearInterval(id);
//     var x = 0;
//     id = setInterval(frame, -50);
//     function frame () {
//         if (x == 360) {
//             clearInterval(id);
//         } else {
//             x++;
//             can.style.top = x + "px";
//             // can.style.top = x + "px";
//         }
//     }
//     var bio = document.createElement("div");



// })

document.getElementById("biography").addEventListener("click", function () {
    var bio = document.createElement("ul");
    bio.classList.add("collection");
    var list = document.createElement("li");
    list.classList.add("collection-item");
    list.innerHTML= "My bio is this dude";
    document.getElementById("below").appendChild(bio);
    document.getElementById("below").appendChild(list);
})