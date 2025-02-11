const body = document.getElementsByTagName("body")[0];

const toggleTheme = () => {
	if (body.classList.contains("dark")) {
		body.classList.remove("dark");
	} else {
		body.classList.add("dark");
	}
};

document.getElementById("themeToggleBtn").onclick = toggleTheme;
