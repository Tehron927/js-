function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function changeTextById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = getRandomNumber();
    } else {
        console.error(`Элемент с id "${id}" не найден.`);
    }
}

changeTextById('element');
changeTextById('element-2');
changeTextById('element-3');

