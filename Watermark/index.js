document.querySelector('body').style.backgroundImage = "url('image.jpg')";
document.querySelector('body').style.backgroundSize = "cover";
let element = document.getElementById('text');
element.innerHTML = "This is a Watermark";
element.style = `color: white; font-size: 3rem; font-family: 'Arial'; opacity: 20%;`;
