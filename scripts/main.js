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

function addChoice(choice) { choices.push(choice); }

function editChoice (id, choice) { choices[id] = choice; }

function showStats(redBtn, blueBtn) {
	let
		redStats = redBtn.querySelector('p.stats'),
		blueStats = blueBtn.querySelector('p.stats');
	
	redStats.textContent = `${choices[randNum].count1} ${choices[randNum].count1 == 1 ? 'person' : 'people'} chose this.`;
	blueStats.textContent = `${choices[randNum].count2} ${choices[randNum].count2 == 1 ? 'person' : 'people'} chose this.`;
	
	redStats.style.opacity = blueStats.style.opacity = '1';
}

function hideStats(redBtn, blueBtn) {
	redBtn.querySelector('p.stats').style.opacity= '0';
	blueBtn.querySelector('p.stats').style.opacity = '0';
}

function openModal(title = 'title', body = '<p>Lorem Ipsum.</p>') {
	document.querySelector('div.modal div.dialog div.dialog-header h3:first-child').textContent = title;
	document.querySelector('div.modal div.dialog div.dialog-body').innerHTML = body;
	
	document.querySelector('div.modal').style.display = 'block';
	setTimeout(() => document.querySelector('div.modal').style.opacity = '1', 100);
}

function closeModal() {
	document.querySelector('div.modal').style.opacity = '0';
	setTimeout(() => document.querySelector('div.modal').style.display = 'none', 500);
}

function submitHandler() {
	let newChoice = {
		choice1: document.querySelector('div.modal form input.choice1').value,
		choice2: document.querySelector('div.modal form input.choice2').value,
		count1: 0,
		count2: 0
	};
	
	addChoice(newChoice);
	closeModal();
	setTimeout(() => openModal('Notice', '<p>Choice was successfully added!</p>'), 500);
}

function editHandler(id) {
	let newChoice = {
		choice1: document.querySelector('div.modal form input.choice1').value,
		choice2: document.querySelector('div.modal form input.choice2').value,
		count1: choices[id].count1,
		count2: choices[id].count2
	};
	
	editChoice(id, newChoice);
	closeModal();
	setTimeout(() => openModal('Notice', '<p>Choice was successfully edited!</p>'), 500);
}

function displayInfo(id) {
	let body = `
			<form>
				<label>First choice</label>
				<input type="text" class="choice1" placeholder="Input a valid choice here..." maxlength="40" value="${choices[id].choice1}" required>
				<label>Second choice</label>
				<input type="text" class="choice2" placeholder="Input a valid choice here..." maxlength="40" value="${choices[id].choice2}" required>
				<input type="button" value="Edit" onclick="editHandler(${id});">
				<input type="reset" value="Reset">
			</form>
		`;
	
	closeModal();
	setTimeout(() => openModal(`Choice info [${id + 1}]`, body), 500);
}

window.addEventListener('load', () => {
	const
		redBtn = document.getElementById('red'),
		blueBtn = document.getElementById('blue'),
		sepBtn = document.querySelector('div.separator'),
		modalCloseBtn = document.querySelector('i.fa.fa-times'),
		newBtn = document.getElementById('newBtn'),
		listBtn = document.getElementById('listBtn'),
		aboutBtn = document.getElementById('aboutBtn');
	
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
	
	modalCloseBtn.addEventListener('click', closeModal);
	window.addEventListener('click', (e) => {
		if(e.target === document.querySelector('div.modal'))
			closeModal();
	});
	
	aboutBtn.addEventListener('click', () => {
		let body = "Similar to that popular social game, “<b>Either</b>”, this one is a very simple light version of it, it's not any better or anything of that sort, it was solely made for experimental purposes, a standalone project with <b>HTML</b>, <b>CSS</b>, a bit of <b>Javascript</b>, and some <i>love</i>.";
		
		openModal('about', body);
	});
	
	listBtn.addEventListener('click', () => {
		let body = '<ul class="choiceList">';
		
		for(let i = 0; i<choices.length; i++)
			body += `<a onclick="displayInfo(${i});"><li><div>${choices[i].choice1}</div><div>${choices[i].choice2}</div></li></a>`;
		
		body += "</ul>";
		
		openModal(`choices list (${choices.length})`, body);
	});
	
	newBtn.addEventListener('click', () => {
		let body = `
			<form>
				<label>First choice</label>
				<input type="text" class="choice1" placeholder="Input a valid choice here..." maxlength="40" required>
				<label>Second choice</label>
				<input type="text" class="choice2" placeholder="Input a valid choice here..." maxlength="40" required>
				<input type="button" value="Add" onclick="submitHandler();">
				<input type="reset" value="Clear">
			</form>
		`;
		
		openModal('new choice', body);
	});
	
	getRandomChoice(redBtn, blueBtn);
});