const image = document.getElementById('cat');

function changeImg() {
    image.src = "images/cat2.jpg";
}
function changeImg2() {
    image.src = "images/cat1.jpg";
}

//задание со *
    const year = prompt ('Введите год')
    if(((year % 4 === 0) && (year % 100 != 0) && (year % 400 != 0))) {
        alert('Високосный');
    }
    else {
        alert('Не високосный');
    }

