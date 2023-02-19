function showMessage () {
    console.log("Я учу JavaScript!");
}
showMessage ();

function forward() {
    let image = document.getElementById('image');
    image.src = "./images/fennec.jpg"
}

function back() {
    let image = document.getElementById('image');
    image.src = "./images/quokka.jpg"
}