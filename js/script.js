let no = document.getElementById("no");
let si = document.getElementById("si");
no.addEventListener("mouseenter", function () {
    document.getElementById("no").style.marginTop= Math.floor((Math.random() * 163) + 0)+"px";
    document.getElementById("no").style.marginLeft= Math.floor((Math.random() * 394) + 0)+"px";
});
si.addEventListener("click", function () {
    document.getElementById("textoFinal").style.display= "inherit";
    document.getElementById("si").style.display="none";
    document.getElementById("no").style.display="none";
})