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
    var element = document.getElementById("below");
    if (element.children.length == 0) {
        var bio = document.createElement("ul");
        bio.classList.add("collection");
        var list = document.createElement("li");
        list.classList.add("collection-item");
        list.innerHTML= "Full stack web developer and graduate of The University of Texas at Austin with a bachelors in Biology, a minor in French and a Certificate in Full Stack Development. My core skills include JavaScript, CSS, HTML, Node/React.js as well as an extensive background in teamwork through being part of a patrol unit for the National Ski Patrol. Decision making is another characteristic I have developed as an Outdoor Emergency Care Technician where the environment is fast paced and decisions can be life altering. Unique in my healthcare background, I have come to find a passion in Web Development and Medical Software where I can help people in a different way.  My inclination to always be learning something new has played a big part in my achievements, and I intend to keep educating myself throughout my future roles.";
        document.getElementById("below").appendChild(bio);
        document.getElementById("below").appendChild(list);
    } else {
        console.log("else");
    }
});

