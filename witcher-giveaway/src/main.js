import imagesLoaded from 'imagesloaded';


import './main.scss';

let totalImages = 3,
    loadedImages = 0;

function startRain(plane) {
    plane = plane || '';
    setInterval(function () {
        const rainDrop = $('<div class="sky__rain rain"></div>');
        if (plane) {
            rainDrop.addClass('rain--' + plane);
        }
        $('.js-object-sky').append(rainDrop);
        rainDrop.css('left', Math.floor(Math.random() * 100) + '%');
        setTimeout(function () {
            rainDrop.remove();
        }, 5000);
    }, 50);
}

const imgLoad = imagesLoaded(document.querySelector('.window'), { background: '.geralt, .background' });
imgLoad.on('progress', function( instance, image ) {
    if (image.isLoaded ) {
        loadedImages += 1;
    }
    let percent = ~~(loadedImages / totalImages * 100);
    $('.preloader .loader').css({ 'transform': 'translateX(-'+(100-percent)+'%)' });
    // console.log( 'image is ' + result + ' for ' + image.img.src );
});
imgLoad.on('done', function( instance ) {
    $('.preloader').delay(500).queue(function() {
        $(this).addClass('loaded').dequeue();
        $('.window').delay(500).queue(function() {
            $(this).addClass('load').dequeue();
        });
    });
});

$('input[type="text"]').on('focus', function () {
    $('form').addClass("active");
});

$('button').on('click', function (e) {
    e.preventDefault();
});

startRain();
startRain('middle');
startRain('back');

