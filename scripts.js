function showImage(id) {
    var img = document.getElementById(id);
    img.style.display = "block";
}

function hideImage(id) {
    var img = document.getElementById(id);
    img.style.display = "none";
}

function showDescription(element) {
    var description = element.querySelector(".description");
    description.style.display = "block";
}

function hideDescription(element) {
    var description = element.querySelector(".description");
    description.style.display = "none";
}
