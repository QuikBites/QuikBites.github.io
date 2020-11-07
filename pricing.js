
//List of all FAQ questions
var Questions = [
	["Can I put my restaurant through a short trial period", "If you would like to trial Quikbites, contact sales for a specialized support assistant to find the best option for you."],
	["Which pricing plan should I choose?", "We understand that every restaurant is different on campus and will require different features depending on your situation. Each plan above have a list of features but if you require assistance or a specialized plan, contact sales."],
	["How can we benefit from Quikbites?", "Students on campus who are hungry always wants to make it back to class on time. Sometimes they decide that not going to a restaurant is safer because they cannot afford to wait in a line. Quikbites gives students this information allowing restaurants to gain more student customers who know that they can eat, and make it back to class."],
];

function onContactSales() {
	window.location.href = "./contactUs.html";
}

//When the button to open or close a question box is clicked
function onOpenQuestion(id) {
	//Gets the answer div element
	divAnswer = document.getElementById("q" + id);
	divButton = document.getElementById("bq" + id);
	
	//Checks if the div element is currently hidden
	if (divAnswer.classList.contains("answercontainer-open")) {
		//It is currently hidden, must add div
		
		divAnswer.classList.remove("answercontainer-open");
		divButton.classList.remove("imageButton-open");
	} else {
		//It is not hidden, should remove
		divAnswer.classList.add("answercontainer-open");
		divButton.classList.add("imageButton-open");
	}
}

//Gets the FAQ Page
var faqPage = document.getElementById("Faq");

//Goes through each question
for(var i = 0; i < Questions.length; i++) {
	
	//Creates container for question
	var openableContainer = document.createElement("div");
	openableContainer.classList.add("openable");
	openableContainer.id = "qc" + i;
	
	//Creates span element inside container
	var insideSpan = document.createElement("div");
	insideSpan.classList.add("inlineElement");
	
	//Creates paragraph inside span
	var pspan = document.createElement("p");
	pspan.innerHTML = Questions[i][0];
	pspan.classList.add("inlineElement");
	pspan.classList.add("QuestionContainer");
	
	//Creates image button inside span
	var imageButton = document.createElement("input");
	imageButton.type = "image";
	imageButton.src = "./images/UI_Toggle.png";
	imageButton.setAttribute("onclick", "onOpenQuestion(" + i + ")");
	imageButton.classList.add("imageButton");
	imageButton.classList.add("inlineElement");
	imageButton.id = "bq" + i;
	
	//Creates Answerbox inside container
	var answerDiv = document.createElement("div");
	answerDiv.id = "q" + i;
	answerDiv.classList.add("answercontainer");
	
	//Creates paragraph inside answerDiv
	var ap = document.createElement("p");
	ap.innerHTML = Questions[i][1];
	
	//Adds to container
	answerDiv.appendChild(ap);
	
	//Adds all elements to their parents
	insideSpan.appendChild(pspan);
	insideSpan.appendChild(imageButton);
	
	openableContainer.appendChild(insideSpan);
	openableContainer.appendChild(answerDiv);
	
	//Add element to document
	faqPage.appendChild(openableContainer);
}