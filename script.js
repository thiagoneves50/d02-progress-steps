const progress = document.querySelector("#progress");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const steps = document.querySelectorAll(".step");

let currentActive = 1;

next.addEventListener("click", () => {
	currentActive++;

	if (currentActive > steps.length) {
		currentActive = steps.length;
	}
	update();
});

previous.addEventListener("click", () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}
	update();
	console.log(currentActive);
});

const update = () => {
	steps.forEach((step, index) => {
		if (index < currentActive) {
			step.classList.add("active");
		} else {
			step.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".active");

	if (actives.length / steps.length === 0.5) {
		progress.style.width = "33.33%";
	} else if (actives.length / steps.length === 0.75) {
		progress.style.width = "66.66%";
	} else if (actives.length / steps.length === 1) {
		progress.style.width = "100%";
	} else {
		progress.style.width = "0%";
	}
	if (currentActive === 1) {
		previous.disabled = true;
	} else if (currentActive === steps.length) {
		next.disabled = true;
	} else {
		previous.disabled = false;
		next.disabled = false;
	}
};
