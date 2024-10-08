/* Abre quando alguém clica no elemento span */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Fecha quando alguém clica no símbolo "x" dentro da sobreposição */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//Slides

const images = [
    { 'id': '1', 'url': 'Assets/Carrosel/itemDesktop1.jpg' },
    { 'id': '2', 'url': 'Assets/Carrosel/itemDesktop2.jpg' },
    { 'id': '3', 'url': 'Assets/Carrosel/itemDesktop3.jpg' },
    { 'id': '4', 'url': 'Assets/Carrosel/itemDesktop4.jpg' },
    { 'id': '5', 'url': 'Assets/Carrosel/itemDesktop5.jpg' },
    { 'id': '6', 'url': 'Assets/Carrosel/itemDesktop6.jpg' },
    { 'id': '7', 'url': 'Assets/Carrosel/itemDesktop7.jpg' },
    { 'id': '8', 'url': 'Assets/Carrosel/itemDesktop8.jpg' }
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(Image => {
        container.innerHTML += `
            <div class='item'>
                <img src=${Image['url']} alt="">
            </div>
        `
    });
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

