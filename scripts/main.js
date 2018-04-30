/*-----------[Variables]-----------*/
const choices = [
	{
		choice1: "Have a cat.",
		choice2: "Have a dog.",
		count1: 0,
		count2: 0
	},
	{
		choice1: "Learn C#.",
		choice2: "Learn Java.",
		count1: 0,
		count2: 0
	},
	{
		choice1: "Be a mobile developer.",
		choice2: "Be a web developer.",
		count1: 0,
		count2: 0
	},
	{
		choice1: "Front-end.",
		choice2: "Back-end.",
		count1: 0,
		count2: 0
	},
	{
		choice1: "Cut off your left hand.",
		choice2: "Cut off your right leg.",
		count1: 0,
		count2: 0
	},
	{
		choice1: "Be deaf.",
		choice2: "Be blind.",
		count1: 0,
		count2: 0
	}
	,
	{
		choice1: "Be rich but have a boring life.",
		choice2: "Be poor but have an exciting life.",
		count1: 0,
		count2: 0
	}
];

var
	randNum = 0,
	allow = true;

/*-----------[Functions]-----------*/
function getRandomChoice(redBtn, blueBtn) {
	randNum = Math.floor(Math.random() * choices.length);
	
	redBtn.querySelector('p.choice').textContent = choices[randNum].choice1;
	blueBtn.querySelector('p.choice').textContent = choices[randNum].choice2;
}

function showStats(redBtn, blueBtn) {
	let
		redStats = redBtn.querySelector('p.stats'),
		blueStats = blueBtn.querySelector('p.stats');
	
	redStats.textContent = `${choices[randNum].count1} chose this.`;
	blueStats.textContent = `${choices[randNum].count2} chose this.`;
	
	redStats.style.opacity = blueStats.style.opacity = '1';
}

function hideStats(redBtn, blueBtn) {
	redBtn.querySelector('p.stats').style.opacity= '0';
	blueBtn.querySelector('p.stats').style.opacity = '0';
}

window.addEventListener('load', () => {
	const
		redBtn = document.getElementById('red'),
		blueBtn = document.getElementById('blue'),
		sepBtn = document.querySelector('div.separator');
	
	redBtn.addEventListener('click', () => {
		if(allow === true) {
			choices[randNum].count1++;
			showStats(redBtn, blueBtn);
			
			allow = false;
		}
	});
	
	blueBtn.addEventListener('click', () => {
		if(allow === true) {
			choices[randNum].count2++;
			showStats(redBtn, blueBtn);
			
			allow = false;
		}
	});
	
	sepBtn.addEventListener('click', () => {
		allow = true;
		
		hideStats(redBtn, blueBtn);
		getRandomChoice(redBtn, blueBtn);
	});
	
	getRandomChoice(redBtn, blueBtn);
});