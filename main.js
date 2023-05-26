const seta = document.querySelectorAll(".down-arrow")
const descriçao = document.querySelectorAll(".portfolio-descriçao")
const darkmode = document.querySelector(".darkmode")
const imagemDarkmode = document.querySelector(".darkmodeimg")

window.onload = function() {
    var darkmodeimg = document.querySelector(".darkmodeimg");
    var box = document.querySelectorAll(".portfolio-card")
    darkmodeimg.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (darkmodeimg.src.match("img/icons8-lua-crescente-ios-16-filled-32.png")) {
            darkmodeimg.src = "img/icons8-sol.svg";
        } else {
            darkmodeimg.src = "img/icons8-lua-crescente-ios-16-filled-32.png";
        }
    });
};

seta.forEach((seta,indice) => {

    seta.addEventListener("click", () => {

        if(descriçao[indice].style.display === "block"){
            descriçao[indice].style.display = "none";
            seta.style.rotate = "0deg"
            console.log("!");
        }   else{
            descriçao[indice].style.display = "block";
            seta.style.rotate = "180deg"
            console.log("?");
        }
    })

});