function removeE() {
	const timer = setTimeout(() => {
		try {
			const docDOM = document.getElementsByClassName("bbtn")[0];
			docDOM.parentNode.removeChild(docDOM);
			const cdDOM = document.getElementsByClassName("flexrow")[0].firstChild.childNodes[2].firstChild;
			cdDOM.parentNode.removeChild(cdDOM);
			const flexrowChildDOM = document.getElementsByClassName("flexrow")[0].childNodes;
			if (flexrowChildDOM.length === 2) {
				flexrowChildDOM[0].parentNode.removeChild(flexrowChildDOM[1]);
				flexrowChildDOM[0].style.flexGrow = 1;
				flexrowChildDOM[0].lastChild.childNodes[1].style.flexGrow = 1;
			}
			const introDOM = document.querySelectorAll(".intro");
			const mbDOM = introDOM[0].childNodes[0].childNodes[2];
			if (mbDOM) mbDOM.style.display = "none";
			clearTimeout(timer);
		} catch {
		}
	}, 500);
}
function listenSVG() {
	document.body.addEventListener(
		"DOMSubtreeModified",
		function () {
			const svgDOM = document.querySelectorAll("#Strip");
			if (svgDOM) {
				for (let i = 0; i < svgDOM.length; i++) {
					svgDOM[i].parentNode.parentNode.style.display = "none";
				}
			}
			const tipDOM = document.querySelectorAll(".flex-col");
			if (tipDOM.length > 0 && tipDOM[0].style.display !== "none") {
				tipDOM[0].style.display = "none";
			}
		},
		false
	);
}
removeE();
listenSVG();
