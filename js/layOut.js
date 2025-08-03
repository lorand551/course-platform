function getBasePath() {
	// Dacă URL-ul conține "project-root", mergem un nivel mai sus
	return window.location.pathname.includes("project-root/") ? "../" : "./";
}

async function loadLayout() {
	const basePath = getBasePath();

	// Header
	const headerHTML = await fetch(`${basePath}header.html`).then((res) =>
		res.text()
	);
	document.getElementById("header-placeholder").innerHTML = headerHTML;

	// Footer
	const footerPlaceholder = document.getElementById("footer-placeholder");
	if (footerPlaceholder) {
		const footerHTML = await fetch(`${basePath}footer.html`).then((res) =>
			res.text()
		);
		footerPlaceholder.innerHTML = footerHTML;
	}

	setActiveMenuItem();
}

async function loadReviews() {
	const basePath = getBasePath();
	const reviewsElement = document.getElementById("reviews-placeholder");
	if (reviewsElement) {
		const reviewsHTML = await fetch(`${basePath}reviews.html`).then((res) =>
			res.text()
		);
		reviewsElement.innerHTML = reviewsHTML;
	}
}

window.addEventListener("DOMContentLoaded", () => {
	loadLayout();
	loadReviews();
});
