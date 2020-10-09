

// responsive parallax header implimentation
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 640) {
    console.log('Wide viewport');
} else {
    console.log('Small viewport');
    $('.venture-case').parallax({
        imageSrc: 'https://ik.imagekit.io/g44d2afwuy/venture-header-sm_hwgr70Ig6.png',
        naturalWidth: 750,
        naturalHeight: 1334
    });
    $('.bespoke-case').parallax({
        imageSrc: 'https://ik.imagekit.io/g44d2afwuy/bespoke-header-sm_Z6QO2zOlI.png',
        naturalWidth: 750,
        naturalHeight: 1334
    });
    $('.black-tris').parallax({
        imageSrc: 'https://ik.imagekit.io/g44d2afwuy/black-tri-2-mobile-2x.png',
        naturalWidth: 750,
        naturalHeight: 1334
    });
}

// initialise case study parallax
$('.parallax-window').parallax({
    naturalWidth: 3000,
    naturalHeight: 2000
});


// lazy load images
$(function() {
    $('.lazy').Lazy();
});