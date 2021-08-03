 const SHOWING_CLASS = "showing";
 const firstSlide = document.querySelector(".slider_page:first-child");
 const slide = () => {
 	const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
 	if (currentSlide) {
 		currentSlide.classList.remove(SHOWING_CLASS);
 		const nextSlide = currentSlide.nextElementSibling;
 		if (nextSlide) {
 			nextSlide.classList.add(SHOWING_CLASS);
 		} else {
 			firstSlide.classList.add(SHOWING_CLASS);
 		}
 	} else {
 		firstSlide.classList.add(SHOWING_CLASS);
 	}
 };
 slide();
 setInterval(slide, 7000);

