// Variables-----------------------------------------------------------------

var 
	burgerIcon = document.querySelector('#menu ul li i'),
	redBox = document.querySelector('#RedBox h2'),
	blueBox = document.querySelector('#BlueBox h2'),
    menu = document.getElementById('menu'),
    about = document.getElementById('about'),
	listC = document.getElementById('listC'),
	addC = document.getElementById('addC'),
	modal = document.getElementById('modal'),
	choicesSec = document.getElementById('choicesSec'),
	closeBtn = document.getElementById('closeBtn');

var 
    isOpen = false,
	index = 0,
    choices = [
		{choice1:'Play Call of Duty',choice2:'Play Battlefield'},
		{choice1:'Play DayZ',choice2:'Play CnR'},
		{choice1:'Learn Java',choice2:'Learn C#'},
		{choice1:'Eat a pizza',choice2:'Eat a burger'},
		{choice1:'Have a dog',choice2:'Have a cat'},
		{choice1:'Travel by plane',choice2:'Travel by boat'},
		{choice1:'Have a private yacht',choice2:'Have a private jet'},
		{choice1:'Be good at drawing',choice2:'Be good at sports'},
		{choice1:'Dye your hair red',choice2:'Dye your hair blue'},
		{choice1:'Yell at someone else',choice2:'Be yelled at by someone else'},
		{choice1:'Be poor but very happy',choice2:'Be rich but very sad'},
		{choice1:'Watch anime',choice2:'Read manga'},
		{choice1:'Sing in front of everyone you know',choice2:'Dance in front of everyone you know'},
		{choice1:'Be murdered',choice2:'Murder someone else'},
		{choice1:'Go to space',choice2:'Go deep into earth'},
		{choice1:'Be in a zoo',choice2:'Be in a jungle'}
	];

// Functions----------------------------------------------------------------

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

function getRandomChoice() {
    "use strict";
	
    index = Math.floor(Math.random() * choices.length);
	redBox.innerHTML = choices[index].choice1;
	blueBox.innerHTML = choices[index].choice2;
}

function openChoicesMenu() {
	let content = '<ul>';
	let maxChoices = choices.length;
	
	for(var i = 0; i<maxChoices; i++)
		content += '<li>' + choices[i].choice1 + ' - ' + choices[i].choice2 + '</li>';
	content += '</ul>';
	choicesSec.innerHTML = content;
	
	modal.style.display = 'block';
	modal.style.opacity = '1';
}

function closeChoicesMenu() {
	modal.style.opacity = '0';
	setTimeout(function() { modal.style.display = 'none'; }, 500);
}

function addChoiceBox() {
	
}

// Event handlers-----------------------------------------------------------

burgerIcon.addEventListener('click', function() {
    "use strict";

    if(menu.style.right == '0px')
        closeMenu();
    else
        openMenu();
});

window.onresize = function() {
    
    if(isOpen == false) {
        if(window.innerWidth <= 800)
            menu.style.right = '-335px'; 
        else
            menu.style.right = '-490px';
    }
}

window.onclick = function(e) {
	if(e.target == modal)
		closeChoicesMenu();
}

about.addEventListener('click', function() {
    "use strict";
    let aboutString = "This is an experimental web application, trying to immitate the famous choices game 'Would you Rather'.";
    
    alert(aboutString);
});

listC.addEventListener('click', function() {
	openChoicesMenu();
});

addC.addEventListener('click', function() {
	addChoiceBox();
});

closeBtn.addEventListener('click', function() {
	closeChoicesMenu();
});

// Function calls-----------------------------------------------------------

getRandomChoice();