async function loadLayout() {
	// checking project-root folder
	const basePath = window.location.pathname.includes("/project-root/")
		? "../"
		: "./";

	// loading header
	const headerHTML = await fetch(`${basePath}header.html`).then((res) =>
		res.text()
	);
	document.getElementById("header-placeholder").innerHTML = headerHTML;
	// loading footer
	const footerHTML = await fetch(`${basePath}footer.html`).then((res) =>
		res.text()
	);
	document.getElementById("footer-placeholder").innerHTML = footerHTML;

	// set link activ
	setActiveMenuItem();
}

function setActiveMenuItem() {
	const currentPage = window.location.pathname.split("/").pop() || "index.html";
	const menuLinks = document.querySelectorAll("header nav a");

	menuLinks.forEach((link) => {
		const href = link.getAttribute("href");
		if (href.includes(currentPage)) {
			link.classList.add("active");
		}
	});
}

window.addEventListener("DOMContentLoaded", loadLayout);
