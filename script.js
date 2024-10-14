const cards = document.querySelectorAll(".card");
const clr_prmry_blue_800 = "hsl(238, 29%, 16%)";
const clr_ntrl_grayish_blue_500 = "hsl(240, 6%, 50%)";
const hoverHandler = function (e) {
	const answer = e.currentTarget.querySelector(".card__answer");
	const question = e.currentTarget.querySelector(".card__question h2");
	const arrow = e.currentTarget.querySelector(".card__question img");
	let heightToExpand, answerOpacity, questionColor, arrowTransform;
	if (!answer.clientHeight) {
		heightToExpand = answer.scrollHeight;
		answerOpacity = 1;
		questionColor = clr_prmry_blue_800;
		arrowTransform = "rotate(180deg)";
	} else {
		heightToExpand = 0;
		answerOpacity = 0;
		questionColor = clr_ntrl_grayish_blue_500;
		arrowTransform = "rotate(0deg)";
	}

	answer.style.opacity = answerOpacity;
	answer.style.height = heightToExpand + "px";
	question.style.color = questionColor;
	arrow.style.transform = arrowTransform;
};

Array.from(cards).forEach((card) => {
	card.addEventListener("mouseenter", (e) => hoverHandler(e));
	card.addEventListener("mouseleave", (e) => hoverHandler(e));
	card.addEventListener("touchstart", (e) => hoverHandler(e));
});
