function changeImg() {
    let image = document.getElementById('cat');
    image.src = "images/cat2.jpg";
}
function changeImg2() {
    let image = document.getElementById('cat');
    image.src = "images/cat1.jpg";
}

    let year = prompt ('Введите год')
    if(((year % 4 == 0) && (year % 100 != 0)) && (year % 400 ==0)){
        alert('Високосный');
    }
    else {
        alert('Не високосный');
    }

