const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.nav-menu');
let isOpen = false;

hamburger.addEventListener('click', function(e) {
    
    if (isOpen) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }

    isOpen = !isOpen;
});

window.addEventListener('resize', function(e) {
    menu.style.display = '';
    isOpen = false;
})

const menSwitcher = document.querySelector('#switch-men');
const womenSwitcher = document.querySelector('#switch-women');

menSwitcher.addEventListener('click', function(e) {
    document.querySelector('.types.men').style.display = 'flex';
    document.querySelector('.types.women').style.display = 'none';
   
    womenSwitcher.style.background = 'transparent';
    womenSwitcher.style.color = '#BF2C65';
    womenSwitcher.querySelector('img').src = 'img/woman-switch-dark.png'
    
    menSwitcher.style.background = '#2D9CDB';
    menSwitcher.style.color = 'white';
    menSwitcher.querySelector('img').src = 'img/men-switch-white.png'

});

womenSwitcher.addEventListener('click', function(e) {
    document.querySelector('.types.men').style.display = 'none';
    document.querySelector('.types.women').style.display = 'flex';
  
    womenSwitcher.style.background = '#BF2C65';
    womenSwitcher.style.color = 'white';
    womenSwitcher.querySelector('img').src = 'img/woman-switch-white.png'
   
    menSwitcher.style.background = 'transparent';
    menSwitcher.style.color = '#2D9CDB';
    menSwitcher.querySelector('img').src = 'img/men-switch-dark.png'
});


window.onload = function () {
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [57.143112, 65.550291],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [57.143112, 65.550291] // координаты точки
            }
        });

        myMap.geoObjects
        .add(myGeoObject)
    }
}
