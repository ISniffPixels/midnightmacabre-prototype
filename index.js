'use strict'

// DOMContentLoaded EVENT IS USED TO MAKE SURE ALL CONTENT IN THE DOM IS LOADED BEFORE ANY JAVASCRIPT IS INITIATED AND RAN PROPERLY
document.addEventListener('DOMContentLoaded', function() {

    // THE FUNCTION BELOW WILL CALL ON JAVASCRIPT CODE TO CHANGE THE SKULL ICON ON THE TOP LEFT OF THE "HOME" PAGE UPON BEING CLICKED INTO SOMETHING MORE FRIGHTENING
    const skullLogo = document.getElementById('skull');

    function scaryDuck() {
        skullLogo.src = './images/cs50duck.png';
    }

    skullLogo.addEventListener('click', scaryDuck)

    // USING "INTERNATIONALIZATION" API TO DYNAMICALLY POST DATES AND TIMES AND NOT HAVE TO HARD CODE THEM EVERYTIME
    const date = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    }
    const locale = navigator.language;
    const InternationalTimeDate = Intl.DateTimeFormat(locale, options).format(date);

    // USING A TEMPLATE STRING ON TWO DIFFERENT ELEMENTS SO THAT JAVASCRIPT IS ABLE TO PRINT DATES ON TWO SEPERATE INSTANCES
    document.querySelector('.postDate').textContent = `Published ${InternationalTimeDate}`;
    document.querySelector('.postDate_2').textContent = `Published ${InternationalTimeDate}`;
});
