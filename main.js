const ball = document.querySelector("img");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const input = document.querySelector("input");

const answersArr = [
	"Tak",
	"Nie",
	"Oczywiście",
	"Jeśli ci bardzo zależy",
	"Nie chcesz tego",
	"Głupie pytanie",
	"Zapytaj kogoś innego",
	"Może",
	"Ciężko powiedzieć...",
	"Ha ha ha ha ha ha",
	"Serio pytasz?",
	"Skąd mam to niby wiedzieć",
	"Będzie jak chcesz",
	"Niewiem ale trzymam kciuki",
	"Nie chcesz znać odpowiedzi na to pytanie...:/",
];

const shakeBall = () => {
	ball.classList.add("shake-animation");
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== "" && input.value.slice(-1) === "?") {
		generateAnswer();
		error.textContent = "";
	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
		error.textContent = 'Pytanie musi być zakończone "?".';
		answer.textContent = "";
	} else {
		error.textContent = "Musisz zadać jakieś pytanie!";
		answer.textContent = "";
	}
	ball.classList.remove("shake-animation");
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 15);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
};

ball.addEventListener("click", shakeBall);
