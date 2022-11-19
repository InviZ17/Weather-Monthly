gismeteo = document.querySelector(".weather > #gismeteo")
rambler = document.querySelector(".weather > #rambler")
weather = document.querySelector(".weather")

document.querySelector(".gismeteo").onclick = function() {
    rambler.style.display = "none";
    gismeteo.style.display = "block";
    gismeteo.style.width = "90%";
    weather.style.gridTemplateColumns = "1fr";
};
document.querySelector(".rambler").onclick = function() {
    gismeteo.style.display = "none";
    rambler.style.display = "block";
    rambler.style.width = "90%";
    weather.style.gridTemplateColumns = "1fr";
    };