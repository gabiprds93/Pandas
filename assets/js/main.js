var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
for(var i in pictures)
{
    var img = document.createElement("img");
    var panda = document.getElementById(i);
    img.setAttribute("src", pictures[i]);
    panda.appendChild(img);
}