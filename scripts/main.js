var 
    burgerIcon = document.querySelector('#menu ul li i'),
    menu = document.getElementById('menu'),
    about = document.getElementById('about'),
    isOpen = false,
	redBox = document.querySelector('#RedBox h2'),
	blueBox = document.querySelector('#BlueBox h2'),
	index = 0,
    choices = [
		{choice1:'Play Call of Duty',choice2:'Play Battlefield'},
		{choice1:'Play DayZ',choice2:'Play CnR'},
		{choice1:'Learn Java',choice2:'Learn C#'},
		{choice1:'Eat a pizza',choice2:'Eat a burger'},
		{choice1:'Have a dog',choice2:'Have a cat'},
		{choice1:'Have your hands chopped',choice2:'Have your arms chopped'}
	];

burgerIcon.addEventListener('click', function () {
    "use strict";

    if(menu.style.right == '0px') {
        closeMenu();
        console.log('close');
    }
    else {
        openMenu();
        console.log('open');
    }
});

window.onresize = function () {
    
    if(isOpen == false) {
        if(window.innerWidth <= 700)
            menu.style.right = '-335px'; 
        else
            menu.style.right = '-490px';
    }
}

function openMenu() {
    "use strict";
    
    menu.style.right = '0px';
    isOpen = true;
}

function closeMenu() {
    "use strict";
    
    if(window.innerWidth <= 700)
        menu.style.right = '-335px'; 
    else
        menu.style.right = '-490px'; //335
    
    isOpen = false;
}

about.addEventListener('click', function () {
    "use strict";
    let aboutString = "This is an experimental web application, trying to immitate the famous choices game 'Would you Rather'";
    
    alert(aboutString);
});

function getRandomChoice() {
    "use strict";
	
    index = Math.floor(Math.random() * choices.length);
	redBox.innerHTML = choices[index].choice1;
	blueBox.innerHTML = choices[index].choice2;
}

getRandomChoice();