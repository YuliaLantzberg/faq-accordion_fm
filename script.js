const cards = document.querySelectorAll(".card");
const clr_prmry_blue_800 = "hsl(238, 29%, 16%)";
const clr_ntrl_grayish_blue_500 = "hsl(240, 6%, 50%)";
const hoverHandler = function (e) {
	const answer = e.currentTarget.querySelector(".card__answer");
	const question = e.currentTarget.querySelector(".card__question h2");
	const arrow = e.currentTarget.querySelector(".card__question img");

	let heightToExpand,
		answerOpacity,
		questionColor,
		arrowTransform,
		answerDisplay;
	if (!e.currentTarget.classList.contains("active")) {
		heightToExpand = "3rem";
		answerOpacity = 1;
		answerDisplay = 0;
		questionColor = clr_prmry_blue_800;
		arrowTransform = "rotate(180deg)";
	} else {
		heightToExpand = 0;
		answerOpacity = 0;
		answerDisplay = "-500rem";
		questionColor = clr_ntrl_grayish_blue_500;
		arrowTransform = "rotate(0deg)";
	}

	answer.style.top = answerDisplay;
	answer.style.opacity = answerOpacity;
	answer.style.height = heightToExpand;
	question.style.color = questionColor;
	arrow.style.transform = arrowTransform;
	e.currentTarget.classList.toggle("active");
};

Array.from(cards).forEach((card) => {
	card.addEventListener("click", (e) => hoverHandler(e));
});
