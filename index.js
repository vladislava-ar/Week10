function showMessage () {
    console.log("Я учу JavaScript!");
}
showMessage ();

function forward() {
    let image = document.getElementById('image');
    image.src = "./images/fennec.jpg"
    image.alt = "Fennec"
}

function back() {
    let image = document.getElementById('image');
    image.src = "./images/quokka.jpg"
    image.alt = "Quokka"
}