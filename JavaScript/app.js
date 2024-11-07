$(document).ready(function () {
    //Menu para dispositivos moveis;
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    //Sombra no header;
    const sections = $('section');
    const navItems = $('.nav-item');
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }
    });

    //Animações de Delay
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 3000,
        distance: '20%',
    });
    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
    });
    ScrollReveal().reveal('.home-items', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
    });
    ScrollReveal().reveal('#contato-container', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
    });
    ScrollReveal().reveal('#copyright', {
        origin: 'bottom',
        duration: 1500,
        distance: '20%',
    })
    ScrollReveal().reveal('.social-media-buttons', {
        origin: 'bottom',
        duration: 1500,
        distance: '20%',
    })
});
